import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Register({
    setIsLoggedIn,
    setUser,
    isLoggedIn,
}: {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<null>>;
    isLoggedIn: boolean;
}) {
    const navigate = useNavigate();

    if (isLoggedIn) return navigate("/");
    return (
        <div>
            <AuthForm
                authType="register"
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
            />
        </div>
    );
}
