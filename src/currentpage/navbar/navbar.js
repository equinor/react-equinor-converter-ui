import React from 'react';
import classnames from 'classnames';

import logo from "../../images/equinor_logo_sm.jpg";

import "../pages.css";



const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark navbar_text">
            <div className="collapse navbar-collapse" id="navbarNav">
                <img className="navbar_logo" src={logo} alt="logo" />
                <a className="navbar-brand ml-2 "> Equinor File Converters </a>
                <ul className="navbar-nav">
                    <li className={classnames('nav-link', 'pointer', props.homeActive)}>
                        <a className="nav-link" onClick={() => props.setPage("MainPage")}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className={classnames('nav-link', 'pointer', props.helpActive)}>
                        <a className="nav-link" onClick={() => props.setPage("HelpPage")}>Help</a>
                    </li>
                    <li className={classnames('nav-link', 'pointer', props.contactActive)}>
                        <a className="nav-link" onClick={() => props.setPage("ContactPage")}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;