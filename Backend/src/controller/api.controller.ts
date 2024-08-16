import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query('uid') uid: string) {
    // 将 uid 从字符串转换为数字
    const userId = parseInt(uid, 10);

    // 检查转换是否成功
    if (isNaN(userId)) {
      return { success: false, message: 'Invalid user ID' };
    }

    // 调用 userService.getUser 方法并传递 userId
    const user = await this.userService.getUser(userId);
    return { success: true, message: 'OK', data: user };
  }
}
