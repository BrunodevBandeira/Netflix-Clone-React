import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

export default({ black }) => {

    return(
        <header className={ black ? "black" : "" }>
            <div className="header--logo"> 
                <a href="/"> 
                    <img src={logo} title="foto" alt="foto" />
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src={user} title="foto" alt="foto" />
                </a>
            </div>
        </header>
    );
};