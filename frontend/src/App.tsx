import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Wish from "./pages/Wish";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Inventory from "./pages/Inventory";
import Shop from "./pages/Shop";
import { FeaturedWishActionType, FeaturedWishStateType } from "./Types";
import { useReducer, useState } from "react";

const initialFeaturedCharactersState = {
    featuredFourStar1: "kuki-shinobu",
    featuredFourStar2: "ningguang",
    featuredFourStar3: "beidou",
    featuredFiveStar: "raiden",
};

function reducer(
    state: FeaturedWishStateType,
    action: FeaturedWishActionType
): FeaturedWishStateType {
    switch (action.type) {
        case "change-4star1":
            return { ...state, featuredFourStar1: action.payload };
        case "change-4star2":
            return { ...state, featuredFourStar2: action.payload };
        case "change-4star3":
            return { ...state, featuredFourStar3: action.payload };
        case "change-5star":
            return { ...state, featuredFiveStar: action.payload };
        default:
            return state;
    }
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [featuredCharactersState, dispatch] = useReducer(
        reducer,
        initialFeaturedCharactersState
    );

    return (
        <BrowserRouter>
            <CustomHeader
                isLoggedIn={isLoggedIn}
                user={user}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
            />
            <Routes>
                <Route index element={<Wish isLoggedIn={isLoggedIn} />} />
                <Route
                    path="/inventory"
                    element={<Inventory isLoggedIn={isLoggedIn} />}
                />
                <Route
                    path="/shop"
                    element={<Shop isLoggedIn={isLoggedIn} />}
                />
                <Route
                    path="/auth/login"
                    element={
                        <Login
                            setIsLoggedIn={setIsLoggedIn}
                            setUser={setUser}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                />
                <Route
                    path="/auth/register"
                    element={
                        <Register
                            setIsLoggedIn={setIsLoggedIn}
                            setUser={setUser}
                            isLoggedIn={isLoggedIn}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
