import { MongoServerError } from "mongodb";
import mongoose from "mongoose";

interface RegisterErrorType {
    message?: string;
    email?: string;
    password?: string;
}

export function registerErrorCatcher(
    err: mongoose.Error.ValidationError | MongoServerError
) {
    let errors: RegisterErrorType = {};

    if (err instanceof MongoServerError && err.code === 11000) {
        err.message = "Email already exists";
    }

    if (
        err instanceof mongoose.Error.ValidationError &&
        err.message.includes("User validation failed")
    ) {
        Object.values(err.errors).forEach((error) => {
            if (error.path === "email" || error.path === "password") {
                errors[error.path] = error.message;
            }
        });
    }

    return errors;
}
