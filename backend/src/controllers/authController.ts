import { NextFunction, Response, Request } from "express";
import User from "../models/User";
import { registerErrorCatcher } from "../middleware/authMiddleware";
import mongoose from "mongoose";
import { MongoServerError } from "mongodb";

export const postRegister = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        return res.status(201).json({ user });
    } catch (error) {
        const e = registerErrorCatcher(
            error as mongoose.Error.ValidationError | MongoServerError
        );
        return res.status(400).json(e);
    }
};

export const postLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password);
        res.status(200).json({ message: `${user.email} has logged in` });
    } catch (error) {
        return next(error);
    }
};
