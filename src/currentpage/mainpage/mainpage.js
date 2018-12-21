import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Headline from "./components/headline.js";
import Dropdown from "./components/dropdown.js";
import Tiles from "./tiles/tiles.js";
import jsonConverters from "../../json/converters.json";

import "../pages.css";



class MainPage extends React.Component {

    state = {
        converters: jsonConverters,
        currentConverter: [],
        uploadActive: false,
        convertActive: false,
        resultActive: false,
        activeTile: "none"
    };

    componentDidMount() {
        this.setActiveTile("none");
        this.state.currentConverter.name = "Select a Converter";

    };

    routeMount = (converterId) => {
        if (this.state.currentConverter.name === "Select a Converter") {
            this.setState({
                currentConverter: this.state.converters[converterId],
                uploadActive: true,
                convertActive: false,
                resultActive: false
            })
            return (
                null
            )
        }
        else {
            return (
                null
            )
        }
    }

    selectConverter = (e) => {
            this.setState({
                currentConverter: this.state.converters[e.target.value]
            });
            this.setActiveTile("upload");
    }

    setActiveTile = (tile) => {
        switch (tile) {
            case "upload":
                this.setState({
                    uploadActive: true,
                    convertActive: false,
                    resultActive: false
                    })
                break;
            case "convert":
                this.setState({
                    uploadActive: false,
                    convertActive: true,
                    resultActive: false
                })
                break;
            case "result":
                this.setState({
                    uploadActive: false,
                    convertActive: false,
                    resultActive: true
                })
                break;
            case "none":
                    this.setState({
                        uploadActive: false,
                        convertActive: false,
                        resultActive: false
                    })
                break;
            default:
                    this.setState({
                        uploadActive: false,
                        convertActive: false,
                        resultActive: false
                    })
                break;
        }
    }

    setHeadline = () => {
        let headline;
        if (this.state.currentConverter !== undefined) {
            headline = this.state.currentConverter.name;
        }
        else {
            headline = "Select a Converter";
        }
        return (headline)
    }

    render() {
        const {
            converters,
            currentConverter,
            uploadActive,
            convertActive,
            resultActive,
        } = this.state;

        return (
            <BrowserRouter>
                <div className="entry-animation">
                    <div className="container container_size">
                        <Headline headlineText={this.setHeadline()} />
                        <br />
                        <Dropdown converters={converters} selectConverter={this.selectConverter} />
                        <Tiles uploadActive={uploadActive} convertActive={convertActive} resultActive={resultActive} currentConverter={currentConverter} setActiveTile={this.setActiveTile} />
                        <Switch>
                            <Route path='/geochem' render={() => 
                                    this.routeMount(0)
                            }/>
                        </ Switch>
                    </div>
                </div>
            </ BrowserRouter>
        );
    }
}

export default MainPage;