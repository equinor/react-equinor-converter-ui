import React from 'react';

import { MDBBtn, Fa } from "mdbreact";

import "../tiles.css";


const Result = (props) => {
    let result;
    if (props.blob === null) {
    result = 
        <div className= "row complete-field" >            
            <h1 className="content-animation col-sm-12 display-4" > Something went wrong...</h1>
            <div className="content-animation col-sm-12"> Click "Report" for details regarding the conversion. </div>
        </div >
    }
    else {
    result =
        <div className="row complete-field" >     
            <h1 className="content-animation col-sm-12 display-4" > Success!</h1>
            <div className="content-animation col-sm-12"> The file has successfully converted, and is ready to be downloaded! </div>
        </div >
    }


    if (props.resultActive === true) {
        return (
            <div className="tile-border">
                <div id="tile-result" className="active">
                    {result}
                    <div className="content-animation row">
                        <div className="col-sm-4 d-flex justify-content-around">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" onClick={props.onDownload}> Download </MDBBtn>
                        </div>
                        <div className="col-sm-4">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button report-button" type="button" onClick={props.onReport}> Report </MDBBtn>
                        </div>
                        <div className="col-sm-4 d-flex justify-content-around">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" onClick={props.onReset}> Reset </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
            return(
                <div className="tile-border">
                    <div id="tile-result" className="inactive">
                        <div className="col-sm-12">
                            <Fa icon="ban" className="icon icon-result content-animation" size="5x" fixed />
                        </div>
                        <div className="row">
                            <div className="content-animation col-sm-12 d-flex justify-content-around">
                                <MDBBtn active color="#007079" className="btn btn-lg tile-button-disabled" type="button" value="Convert" disabled={true}>...</MDBBtn>

                                <MDBBtn active color="#007079" className="btn btn-lg tile-button-disabled" type="button" value="Convert" disabled={true}>...</MDBBtn>

                                <MDBBtn active color="#007079" className="btn btn-lg tile-button-disabled" type="button" value="Clear" disabled={true}> ... </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }

}

export default Result;