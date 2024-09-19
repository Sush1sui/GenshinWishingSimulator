import { Document, Model } from "mongoose";

export interface CustomUser extends Document {
    email: string;
    password: string;
}

export interface UserWithLoginType extends Model<CustomUser> {
    login(email: string, password: string): Promise<CustomUser>;
}
