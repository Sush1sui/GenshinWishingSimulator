import { Response, Request } from "express";
import User from "../models/User";
import {
    loginErrorCatcher,
    registerErrorCatcher,
} from "../middleware/authMiddleware";
import mongoose from "mongoose";
import { MongoServerError } from "mongodb";

export const postRegister = async (req: Request, res: Response) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.create({ email, username, password });
        return res.status(201).json({ user });
    } catch (error) {
        const e = registerErrorCatcher(
            error as mongoose.Error.ValidationError | MongoServerError
        );
        console.log(error);
        return res.status(400).json(e);
    }
};

export const postLogin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await User.login(username, password);
        return res.status(200).json({
            user: {
                email: user.email,
                username: user.username,
            },
            message: `${user.email} has logged in`,
        });
    } catch (error) {
        const e = loginErrorCatcher(error as MongoServerError);
        return res.status(400).json(e);
    }
};
