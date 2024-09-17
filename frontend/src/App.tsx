import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Wish from "./pages/Wish";

function App() {
    return (
        <BrowserRouter>
            <CustomHeader />
            <Routes>
                <Route path="/" element={<Wish />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
