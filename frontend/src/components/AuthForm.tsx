import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

type PropType = {
    authType: "login" | "register";
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<null>>;
};

export default function AuthForm({
    authType,
    setIsLoggedIn,
    setUser,
}: PropType) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await fetch(`http://localhost:6969/auth/${authType}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                }),
            });

            if (!res.ok)
                throw new Error("An error occurred while submitting the form.");

            const data = await res.json();
            setIsLoggedIn(true);
            setUser(data.user);
            navigate("/");
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            style={{
                position: "relative",
            }}
        >
            {isLoading && <LoadingScreen />}
            <div
                className="container px-3 m-auto pt-5"
                style={{ width: "250px" }}
            >
                <form className="border rounded p-4" onSubmit={handleSubmit}>
                    {authType === "register" && (
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
                                disabled={isLoading}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label shadow"
                        >
                            <b>Username</b>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="RaidenSimp123"
                            disabled={isLoading}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            disabled={isLoading}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {authType === "login" && (
                        <div className="mb-2">
                            <Link to={"/auth/forgot-password"}>
                                Forgot password
                            </Link>
                        </div>
                    )}
                    {
                        <div className="mb-3">
                            <Link
                                to={`/auth/${
                                    authType === "login" ? "register" : "login"
                                }`}
                            >
                                {authType === "login"
                                    ? "Don't have an account?"
                                    : "Have an account?"}
                            </Link>
                        </div>
                    }
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-success px-3 mt-1"
                            type="submit"
                            disabled={isLoading}
                        >
                            {authType.toUpperCase()}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
