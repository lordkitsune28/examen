import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styled/navbar.css"

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light w-100">
                <div className='mx-auto menu'>
                    <Link
                        className="navbar-brand"
                        to="/"
                    >
                        <img src="https://res.cloudinary.com/donoutoby/image/upload/v1645397415/examen/Tiendita_nmx4rf.svg" />
                    </Link>

                    <div className='float-end d-flex'>
                        <div className='navbar-text d-flex mx-2'>
                            <img src="https://res.cloudinary.com/donoutoby/image/upload/v1645312106/examen/Property_1_map-pin_s7skv6.svg" />
                            <div>México City Marriott Reforma Hotel...</div>
                        </div>

                        <div className='navbar-text mx-2 carrito'>
                            <div className='mx-auto w-50'>
                                <img className='mx-2' src="https://res.cloudinary.com/donoutoby/image/upload/v1645402619/examen/Property_1_shopping-cart_brwjlz_bmwsb2.svg" />
                            0
                            </div>
                        </div>
                    </div>
                </div>
                {/*                 
                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/charapters"
                        >
                            Charapters
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div> */}


            </nav>
        </div>
    )
}
