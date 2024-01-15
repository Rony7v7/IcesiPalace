import React, { useState, useEffect } from "react";
import AuthService from '../../services/AuthService';
import "../../styles/HomePage/LeftSideNav.css";

import {
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';

export default function LeftSideNav() {
    const [user, setUser] = React.useState({ name: "Dummy user" });

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        console.log(user);

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <div className="main-container">
            <Nav className="nav-bar">

                <NavItem>
                    <span className="nav-bar-title">MARKET PALACE</span>
                </NavItem>

                {
                    currentUser ? (

                        <NavItem className="user-container">
                            <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="icono del usuario" className="user-image" />
                            <NavLink href="#" className="user-title">{user.name}</NavLink>
                        </NavItem>

                    ) : (
                        <NavItem className="user-container">

                        </NavItem>
                    )
                }

                <Input className="input" placeholder="Search" />

                <hr />
                <div className="bottom-container">
                    <div className="categories">
                        <NavItem>
                            <NavLink href="#" className="category-title">Categories</NavLink>
                        </NavItem>
                    </div>


                    <div className="actions">
                       <NavItem>
                            <NavLink href="#" className="action-title">Settings</NavLink>
                        </NavItem>  
                    </div>
                </div>

            </Nav>
        </div>
    )
}