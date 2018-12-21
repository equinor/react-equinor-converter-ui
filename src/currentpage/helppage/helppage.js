import React from 'react';

import jsonHelpTopics from "../../json/helptopics.json";

import "../pages.css";



const HelpPage = () => {
    return (
        <div className="container container_size in-back entry-animation">
            <div>
                <h1 className="col-sm-12 headline2 display-4">Help Topics</h1>
                <br />
                <div className="freetext"> Here you will find a collection of frequently asked questions. If you can't find your answer here, navigate to the contact-page and ask one of the developers/designers for help. </div>
                <br />
                <br />
                <div>
                    {
                        jsonHelpTopics.map(obj => <div key={obj.id}>
                            <div className="freetext font-weight-bold" >{obj.topic}</div>
                            <div className="freetext">{obj.text}</div> 
                            <br />
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HelpPage;