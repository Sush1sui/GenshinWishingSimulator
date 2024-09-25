import React from "react";
import AuthForm from "../components/AuthForm";

export default function Login({
    setIsLoggedIn,
    setUser,
}: {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<null>>;
}) {
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
