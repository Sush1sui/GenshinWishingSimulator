import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

// pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wish from "./pages/Wish";
import Inventory from "./pages/Inventory";
import About from "./pages/About";

// components
import CustomHeader from "./components/CustomHeader";

function App() {
    const [loggedUser, setLoggedUser] = useState<string | null>(null);

    return (
        <div>
            <BrowserRouter>
                <CustomHeader loggedUser={loggedUser} />
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="auth">
                        <Route
                            index
                            element={<Navigate replace to={"login"} />}
                        />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="wish" element={<Wish />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
