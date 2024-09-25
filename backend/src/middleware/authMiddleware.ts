import { MongoServerError } from "mongodb";
import mongoose from "mongoose";

interface CustomErrorType {
    message?: string;
    email?: string;
    password?: string;
}

export function registerErrorCatcher(
    err: mongoose.Error.ValidationError | MongoServerError
) {
    let errors: CustomErrorType = {};

    if ("code" in err && err.code === 11000) {
        const duplicateField = Object.keys(err.keyValue)[0];

        if (duplicateField === "email") {
            errors.message = "Email already exists";
        } else if (duplicateField === "username") {
            errors.message = "Username already exists";
        } else {
            errors.message = "Duplicate field error";
        }
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

export function loginErrorCatcher(err: MongoServerError) {
    let errors: CustomErrorType = {};
    if (err.message === "Incorrect credentials") errors.message = err.message;
    return errors;
}
