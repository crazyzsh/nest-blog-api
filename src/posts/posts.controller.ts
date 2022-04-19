import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiProperty } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
import { isNotEmpty } from 'class-validator';
import { query } from 'express';
import { get } from 'http';
import * as mongoose from 'mongoose';
import { retry } from 'rxjs';
import { Post_, PostModel } from "./post.model"

// 定义结构
class IPostCreate {
    @ApiProperty({ description: '帖子标题', example: '帖子标题示例' })
    // @isNotEmpty({ message: false })
    title: string
    @ApiProperty({ description: '帖子内容', example: '帖子内容示例' })
    content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {

    // ************创建帖子***********
    @Post()
    // 具体描述
    @ApiOperation({ summary: '创建帖子' })
    // create(@Body() body, @Query() query, @Param() params) {
    // }
    async create(@Body() body: IPostCreate) {
        // 创建时返回一个插入的对象
        const { _id: id } = await PostModel.create(body);
        const user = await PostModel.findById(id).exec();
        console.log(user);
        return body
    }

    // 查询全部内容
    @Get()
    @ApiOperation({ summary: '查询全部' })
    async queryAll() {
        return await PostModel.find()
    }

    // ************删除帖子***********
    @Delete(':id')
    @ApiOperation({ 'summary': '删除帖子' })
    async remove(@Param('id') id: string) {
        await PostModel.findByIdAndDelete(id)
        // await PostModel.findByIdAndRemove(id)
        // await PostModel.deleteOne({ _id: id })
        return { success: true }
    }

    // ************修改帖子***********
    @Put(':id')
    @ApiOperation({ summary: '更改帖子' })
    async put(@Param('id') id: string, @Body() body: IPostCreate) {
        await PostModel.findByIdAndUpdate(id, body)
        return {
            success: true
        }
    }

    // ************查询单个帖子***********
    @Get(':id')
    @ApiOperation({ summary: '查询单个帖子' })
    async detail(@Param('id') id: string) {
        return await PostModel.findById(id)
    }


}
