import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CustomHeader({
    isLoggedIn,
    user,
    setIsLoggedIn,
    setUser,
}: {
    isLoggedIn: boolean;
    user: { email: string; username: string } | null;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<null>>;
}) {
    const [accDropdown, setAccDropdown] = useState(false);
    const [shouldNav, setShouldNav] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setAccDropdown(false);
    }, [location.pathname]);

    // Navigate after logout
    useEffect(() => {
        if (shouldNav) {
            navigate("/login");
            setUser(null);
            setShouldNav(false); // Reset the flag
        }
    }, [shouldNav, navigate]);

    return (
        <nav
            className="navbar navbar-expand-lg bg-primary"
            style={{ height: "10vh" }}
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <Link
                    to={"/"}
                    className="navbar-brand"
                    style={{ fontFamily: "Signika, sans-serif" }}
                >
                    Genshin Wishing Simulator
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to={"/"}
                                className={`nav-link ${
                                    location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                Wish
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={"/inventory"}
                                className={`nav-link ${
                                    location.pathname === "/inventory"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={"/shop"}
                                className={`nav-link ${
                                    location.pathname === "/shop"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div
                                className={`nav-link ${
                                    location.pathname === "/auth/login" ||
                                    location.pathname === "/auth/register"
                                        ? "active"
                                        : ""
                                }`}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded={accDropdown}
                                onClick={() => setAccDropdown(!accDropdown)}
                            >
                                Account
                            </div>
                            <ul
                                className={`dropdown-menu ${
                                    accDropdown ? "show" : ""
                                }`}
                            >
                                {isLoggedIn === false ? (
                                    <>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={"/auth/login"}
                                                onClick={() =>
                                                    setAccDropdown(false)
                                                }
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={"/auth/register"}
                                                onClick={() =>
                                                    setAccDropdown(false)
                                                }
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={"/profile"}
                                                onClick={() =>
                                                    setAccDropdown(false)
                                                }
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {user?.username}
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item"
                                                onClick={(
                                                    e: React.MouseEvent<HTMLButtonElement>
                                                ) => {
                                                    e.preventDefault();
                                                    setAccDropdown(false);
                                                    setIsLoggedIn(false);
                                                    setShouldNav(true);
                                                }}
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
