import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { InterestGroup } from '../entity/InterestGroup';

@Provide()
export class InterestGroupService {
    @InjectEntityModel(InterestGroup)
    interestGroupRepository: Repository<InterestGroup>;

    constructor() {
        console.log('InterestGroupRepository:', this.interestGroupRepository); // 打印 repository 以检查注入
    }

    async createInterestGroup(groupData: Partial<InterestGroup>): Promise<InterestGroup> {
        if (!this.interestGroupRepository) {
            throw new Error('InterestGroupRepository is not injected');
        }
        const group = new InterestGroup();
        group.name = groupData.name;
        group.description = groupData.description;
        group.createdAt = new Date();
        return await this.interestGroupRepository.save(group);
    }

    async getInterestGroup(id: number): Promise<InterestGroup> {
        if (!this.interestGroupRepository) {
            throw new Error('InterestGroupRepository is not injected');
        }
        return await this.interestGroupRepository.findOne({ where: { id }, relations: ['posts'] });
    }

    async getAllInterestGroups(): Promise<InterestGroup[]> {

        if (!this.interestGroupRepository) {
            throw new Error('InterestGroupRepository is not injected');
        }
        return await this.interestGroupRepository.find();
    }
}
