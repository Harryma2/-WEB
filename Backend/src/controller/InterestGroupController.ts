import { Controller, Post, Body, Get, Param, HttpCode } from '@midwayjs/decorator';
import { HttpStatus } from '@midwayjs/core';
import { InterestGroupService } from '../service/interestGroup.service';
import { InterestGroup } from '../entity/InterestGroup';

@Controller('/api/interestGroup')
export class InterestGroupController {
    constructor(private interestGroupService: InterestGroupService) { }

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createInterestGroup(@Body() groupData: Partial<InterestGroup>): Promise<InterestGroup> {
        return await this.interestGroupService.createInterestGroup(groupData);
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async getInterestGroup(@Param('id') id: number): Promise<InterestGroup> {
        return await this.interestGroupService.getInterestGroup(id);
    }

    @Get('/')
    @HttpCode(HttpStatus.OK)
    async getAllInterestGroups(): Promise<InterestGroup[]> {
        return await this.interestGroupService.getAllInterestGroups();
    }
}
