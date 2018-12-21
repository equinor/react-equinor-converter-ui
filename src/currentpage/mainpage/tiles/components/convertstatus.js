import React from 'react';

import { MDBBtn, Fa } from "mdbreact";

import "../tiles.css";



const ConvertStatus = (props) => {

    if (props.convertActive === true) {
        return (
            <div className="tile-border">
                <div id="tile-convertstatus" className="active">
                    <div className="content-animation row d-flex justify-content-around">
                        <div className="col-sm-12 loader-field d-flex justify-content-around">
                            <div className="equinor-spinner"> </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around">
                        <div className="content-animation" >
                            {props.status}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around">
                        <div className="content-animation" >
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-around">
                            <MDBBtn active color="#007079" className="content-animation btn btn-lg tile-button" type="button" onClick={props.onCancel}> Cancel </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.convertActive === false && props.resultActive === false) {
        return (
            <div className="tile-border">
                <div id="tile-convertstatus" className="inactive">
                    <div className="col-sm-12">
                        <Fa icon="ban" className="icon icon-convertstatus content-animation" size="5x" fixed />
                    </div>
                    <div className="content-animation row">
                        <div className="col-sm-12 d-flex justify-content-around">

                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" value="Cancel" disabled={true}> ... </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        if (props.resultActive === true && props.blob === null) {
            return (
                <div className="tile-border">
                    <div id="tile-convertstatus" className="inactive">
                        <div className="col-sm-12 icon-emerge-animation">
                            <Fa icon="close" className="icon icon-convertstatus" size="5x" fixed />
                        </div>
                        <div className="content-animation row">
                            <div className="col-sm-12 d-flex justify-content-around">
                                <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" value="Cancel" disabled={true}> ... </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else  {
            return (
                <div className="tile-border">
                    <div id="tile-convertstatus" className={props.convertActive ? 'active' : 'inactive'}>
                        <div className="col-sm-12 icon-emerge-animation">
                            <Fa icon="check" className="icon icon-convertstatus" size="5x" fixed />
                        </div>
                        <div className="content-animation row">
                            <div className="col-sm-12 d-flex justify-content-around">
                                <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" value="Cancel" disabled={true}> ... </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ConvertStatus;