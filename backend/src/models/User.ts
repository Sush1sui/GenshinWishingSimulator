import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import { CustomUser, UserWithLoginType } from "./Types/UserType";
const { isEmail } = validator;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        validate: [isEmail, "Please enter a valid email"],
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
        minLength: [6, "Username should be at least 6 characters"],
        maxLength: [30, "Username should not exceed 30 characters"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [12, "Password should be at least 12 characters"],
    },
});

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 17);
    next();
});

userSchema.statics.login = async function (
    username,
    password
): Promise<CustomUser> {
    if (!username) throw new Error("Username is required");
    if (!password) throw new Error("Password is required");

    const user = await this.findOne({ username });

    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) return user;
        throw new Error("Incorrect credentials");
    }
    throw new Error("Incorrect credentials");
};

const User = mongoose.model<CustomUser, UserWithLoginType>("User", userSchema);

export default User;
