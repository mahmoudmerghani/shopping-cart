import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    );
}
