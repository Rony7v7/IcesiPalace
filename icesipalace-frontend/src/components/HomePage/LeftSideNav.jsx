import React, { useState, useEffect } from "react";
import AuthService from '../../services/AuthService';
import "../../styles/HomePage/LeftSideNav.css";

import {
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';

export default function LeftSideNav({ onClick }) {

    const [currentUser, setCurrentUser] = useState(undefined);



    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);





    return (
        <div>
            <Nav className="nav-bar">

                <NavItem className="nav-bar-title">
                    <span>MARKET PALACE</span>
                </NavItem>

                {
                    currentUser ? (

                        <NavItem className="user-container">
                            <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="icono del usuario" className="user-image" />
                            <NavLink href="#" className="user-title">{currentUser.username}</NavLink>
                        </NavItem>

                    ) : (
                        ""
                    )
                }
                <Input className="input" placeholder="Search" />

                <hr />
                <div className="categories">
                    <NavItem>
                        <h3>
                            Categories
                        </h3>
                    </NavItem>
                </div>


                <div className="actions">
                    <NavItem>
                        <NavLink href="#" className="btn btn-secondary">Settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <button className="btn btn-success" onClick={onClick}> Create Post</button>
                    </NavItem>
                </div>
            </Nav>
        </div>
    )
}