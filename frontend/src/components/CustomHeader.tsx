import { Link } from "react-router-dom";

export default function CustomHeader() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-primary"
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
                            <Link to={"/"} className="nav-link active">
                                Wish
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/inventory"} className="nav-link">
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/shop"} className="nav-link">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Account
                            </div>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <Link
                                        to={"/login"}
                                        style={{ textDecoration: "none" }}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link
                                        to={"/register"}
                                        style={{ textDecoration: "none" }}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
