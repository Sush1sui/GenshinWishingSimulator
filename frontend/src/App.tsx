import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomHeader from "./components/CustomHeader";

function App() {
    return (
        <div>
            <BrowserRouter>
                <CustomHeader />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
