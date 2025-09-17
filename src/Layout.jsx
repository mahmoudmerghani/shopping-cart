import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";


export default function Layout() {
    const [placedProducts, setPlacedProducts] = useState({});


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
                                Cart <span className="products-number">{Object.keys(placedProducts).length}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="outlet">
                <Outlet context={[placedProducts, setPlacedProducts]}/>
            </div>
        </div>
    );
}
