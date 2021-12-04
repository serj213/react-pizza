import React from "react";
import './header.scss';

import Button from "../UI/Button/Button";

import logo from '../../assets/images/pizza-logo.svg';

const Header = props => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Button buttonAdd={false} />
                </div>
            </div>
        </div>
    )
}

export default Header;