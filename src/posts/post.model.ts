import { prop, getModelForClass } from '@typegoose/typegoose';
// import * as mongoose from 'mongoose';

class Post_ {
    @prop()
    public title: string;

    @prop()
    public content: string;
}

const PostModel = getModelForClass(Post_); // UserModel is a regular Mongoose Model with correct types
export { Post_, PostModel }