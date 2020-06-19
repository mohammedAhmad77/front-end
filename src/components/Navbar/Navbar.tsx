import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
                <div className="navbar-container">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link to="/posts">
                                Posts
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/albums">
                                Albums
                            </Link>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Navbar;