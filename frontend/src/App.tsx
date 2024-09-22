import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Wish from "./pages/Wish";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Inventory from "./pages/Inventory";
import Shop from "./pages/Shop";

function App() {
    return (
        <BrowserRouter>
            <CustomHeader />
            <Routes>
                <Route path="/" element={<Wish />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
