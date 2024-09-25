import { Document, Model } from "mongoose";

export interface CustomUser extends Document {
    email: string;
    username: string;
    password: string;
}

export interface UserWithLoginType extends Model<CustomUser> {
    login(username: string, password: string): Promise<CustomUser>;
}
