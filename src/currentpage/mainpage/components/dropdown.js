import React from 'react';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import "../../pages.css";



const Dropdown = (props) => {
    return (
        <div>
            <MDBDropdown className="mt-2 ">
                <MDBDropdownToggle caret color="" className="dropdown-toggle ">
                    Select a converter
                </MDBDropdownToggle>
                <MDBDropdownMenu basic color="" className="form-control dropdown-box dropdown-animation" onClick={props.selectConverter}>
                    {props.converters.map((conv) =>
                        <MDBDropdownItem className="dropdown-option" key={conv.id} id={conv.id} value={conv.id} > {conv.name} </MDBDropdownItem>
                    )}
                </MDBDropdownMenu>
            </MDBDropdown>
        </div>
        )
}



export default Dropdown;