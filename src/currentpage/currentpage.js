import React from 'react';

import Navbar from "./navbar/navbar.js";
import MainPage from "./mainpage/mainpage.js";
import HelpPage from "./helppage/helppage.js";
import ContactPage from "./contactpage/contactpage.js";

import './pages.css';


class CurrentPage extends React.Component {
    state = {
        currentPage: <MainPage />,
        homeActive: 'active',
        helpActive: "default",
        contactActive: "default",
    }

    setPage = (page) => {
        switch (page) {
            case "MainPage":
                this.setState({
                    currentPage: <MainPage />,
                    homeActive:'active',
                    helpActive: "default",
                    contactActive: "default",
                })
                break;
            case "HelpPage":
                this.setState({
                    currentPage: <HelpPage />,
                    homeActive: "default",
                    helpActive: "active",
                    contactActive: "default",
                })
                break;
            case "ContactPage":
                this.setState({
                    currentPage: <ContactPage/>,
                    homeActive: "default",
                    helpActive: "default",
                    contactActive: "active",
                })
                break;
        }
    }

    render() {
        const {
            currentPage,
            homeActive,
            helpActive,
            contactActive
        }
            = this.state;
        return (
            <div>
                <Navbar homeActive={homeActive} helpActive={helpActive} contactActive={contactActive} setPage={this.setPage} />
                <br />
                {currentPage }
            </div>
        );
    }
}

export default CurrentPage;