import React from "react";
import AuthForm from "../components/AuthForm";

export default function Register({
    setIsLoggedIn,
    setUser,
}: {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<null>>;
}) {
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
