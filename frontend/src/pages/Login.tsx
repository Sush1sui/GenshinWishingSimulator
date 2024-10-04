import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Login({
    setIsLoggedIn,
    setUser,
    isLoggedIn,
}: {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<null>>;
    isLoggedIn: boolean;
}) {
    const navigate = useNavigate();

    useEffect(() => {}, [isLoggedIn]);

    if (isLoggedIn) return navigate("/");

    return (
        <div>
            <AuthForm
                authType="login"
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
            />
        </div>
    );
}
