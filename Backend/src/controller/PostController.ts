import { Controller, Post, Body, Get, Param, Put, HttpCode } from '@midwayjs/decorator';
import { HttpStatus } from '@midwayjs/core';
import { PostService } from '../service/PostService';
import { Post as PostEntity } from '../entity/Post';

@Controller('/api/post')
export class PostController {
    constructor(private postService: PostService) { }

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createPost(@Body() postData: Partial<PostEntity>): Promise<PostEntity> {
        return await this.postService.createPost(postData);
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    async getPost(@Param('id') id: number): Promise<PostEntity> {
        return await this.postService.getPost(id);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async updatePost(@Param('id') id: number, @Body() postData: Partial<PostEntity>): Promise<PostEntity> {
        return await this.postService.updatePost(id, postData);
    }

    @Post('/delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletePost(@Param('id') id: number): Promise<void> {
        await this.postService.deletePost(id);
    }
}
