import React from "react";
import { Link } from "react-router-dom";

type PropType = {
    authType: "login" | "register";
};

export default function AuthForm({ authType }: PropType) {
    return (
        <div
            className="container m-auto mt-5 border rounded p-3"
            style={{ width: "250px" }}
        >
            <form action="">
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label shadow"
                    >
                        <b>Email</b>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput2"
                        className="form-label shadow"
                    >
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="password"
                    />
                </div>
                {authType === "login" && (
                    <div className="mb-3">
                        <Link to={"/forgot-password"}>Forgot password</Link>
                    </div>
                )}
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success px-3 mt-1" type="submit">
                        {authType.toUpperCase()}
                    </button>
                </div>
            </form>
        </div>
    );
}
