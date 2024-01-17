import React, { useState, useEffect } from "react";
import AuthService from '../../services/AuthService';
import "../../styles/HomePage/LeftSideNav.css";
import { Nav, NavItem, NavLink, Input } from 'reactstrap';

export default function LeftSideNav({ onClick }) {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const triggerSearch = async (term) => {
        // Check if already searching, if yes, return
        if (isSearching) {
            return;
        }

        setIsSearching(true);

        // Implement your database query logic here using the 'term'
        // This function will be called when the user presses Enter
        if (term.trim() !== "") {
            console.log("Querying database with:", term);
            // Perform your database query here

            // Simulate an asynchronous operation (replace this with your actual async code)
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsSearching(false);
        }
    };

    const onChangeSearch = (e) => {
        const search = e.target.value;
        setSearchTerm(search);
    };

    const onKeyPressSearch = (e) => {
        // Check if the Enter key is pressed
        if (e.key === "Enter") {
            triggerSearch(searchTerm);
        }
    };

    return (
        <div>
            <Nav className="nav-bar">
                <NavItem className="nav-bar-title">
                    <span>MARKET PALACE</span>
                </NavItem>

                {currentUser ? (
                    <NavItem className="user-container">
                        <img src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png" alt="icono del usuario" className="user-image" />
                        <NavLink href="#" className="user-title">{currentUser.username}</NavLink>
                    </NavItem>
                ) : (
                    ""
                )}

                <Input className="input" placeholder="Search" onChange={onChangeSearch} onKeyPress={onKeyPressSearch} />

                <hr />
                <div className="categories">
                    <NavItem>
                        <h3>Categories</h3>
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
