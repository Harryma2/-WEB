import { Provide } from '@midwayjs/core';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import * as bcrypt from 'bcryptjs';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userRepository: Repository<User>;

  constructor() {
    console.log('UserRepository:', this.userRepository);
  }

  async register(userData: { username: string, email: string, password: string, avatar?: string, hobbies?: string[] }) {
    // 密码哈希
    userData.password = bcrypt.hashSync(userData.password, 10);
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && bcrypt.compareSync(password, user.password)) {
      return { user };
    }
    return null;
  }



  async getUser(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }
}
