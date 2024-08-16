import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entity/Post';

@Provide()
export class PostService {
    @InjectEntityModel(Post)
    postRepository: Repository<Post>;

    constructor() {
        console.log('PostRepository:', this.postRepository);
    }

    async createPost(postData: Partial<Post>): Promise<Post> {
        if (!this.postRepository) {
            throw new Error('PostRepository is not injected');
        }
        const post = new Post();
        post.title = postData.title;
        post.content = postData.content;
        post.createdAt = new Date();
        return await this.postRepository.save(post);
    }

    async getPost(id: number): Promise<Post> {
        if (!this.postRepository) {
            throw new Error('PostRepository is not injected');
        }
        return await this.postRepository.findOne({ where: { id } });
    }

    async updatePost(id: number, postData: Partial<Post>): Promise<Post> {
        if (!this.postRepository) {
            throw new Error('PostRepository is not injected');
        }
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) {
            throw new Error('Post not found');
        }
        this.postRepository.merge(post, postData);
        return await this.postRepository.save(post);
    }

    async deletePost(id: number): Promise<void> {
        if (!this.postRepository) {
            throw new Error('PostRepository is not injected');
        }
        await this.postRepository.delete(id);
    }
}
