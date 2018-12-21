import React from 'react';

import "../../pages.css";



const Headline = (props) => {
    return (
        <div id="headline" className="row headline1 content">
            <h1 className="col-sm-12 display-4"> {props.headlineText} </h1>
        </div>
        )
}



export default Headline;