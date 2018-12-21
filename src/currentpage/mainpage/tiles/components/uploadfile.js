import React from 'react';

import Dropzone from 'react-dropzone';
import { fromEvent } from 'file-selector';
import { MDBBtn, Fa } from "mdbreact";

import "../tiles.css";



const UploadFile = (props) => {
    let fileList;

    switch (props.files.length) {
        case 0:
            fileList =
                <div>
                    <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 40 }}>Click here </div>
                    <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 25 }}> or drag files directly into this field</div>
                </div>
            break;
        case 1:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        {
                            props.files.map(f => <div className="col-sm-12" key={f.name}>
                                <div className="row dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 30 }}><Fa icon="file-text" size="5x" fixed /></div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}> {f.name} </div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}> {(f.size / 1000).toFixed(1)} mb </div>
                            </div>)
                        }
                    </div>
                </div>
            break;
        case 2:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        {
                            props.files.map(f => <div className="col-sm-6" key={f.name}>
                                <div className="row dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 30 }}><Fa icon="file-text" size="5x" fixed /></div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}> {f.name} </div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}> {(f.size / 1000).toFixed(1)} mb </div>
                            </div>)
                        }
                    </div>
                </div>
            break;
        case 3:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        {
                            props.files.map(f => <div className="col-sm-4" key={f.name}>
                                <div className="row dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 30 }}><Fa icon="file-text" size="4x" fixed /></div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}> {f.name} </div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}> {(f.size / 1000).toFixed(1)} mb </div>
                            </div>)
                        }
                    </div>
                </div>
            break;
        case 4:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        {
                            props.files.map(f => <div className="col-sm-3" key={f.name}>
                                <div className="row dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 23 }}><Fa icon="file-text" size="3x" fixed /></div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 23 }}> {f.name} </div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 23 }}> {(f.size / 1000).toFixed(1)} mb </div>
                            </div>)
                        }
                    </div>
                </div>
            break;
        case 5:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        {
                            props.files.map(f => <div className="col-sm-2" key={f.name}>
                                <div className="row dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 23 }}><Fa icon="file-text" size="2x" fixed /></div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 23 }}> {f.name} </div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 23 }}> {(f.size / 1000).toFixed(1)} mb </div>
                            </div>)
                        }
                    </div>
                </div>
            break;
        case 6:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        {
                            props.files.map(f => <div className="col-sm-2" key={f.name}>
                                <div className="row dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 21 }}><Fa icon="file-text" size="2x" fixed /></div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 21 }}> {f.name} </div>
                                <div className="row dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 21 }}> {(f.size / 1000).toFixed(1)} mb </div>
                            </div>)
                        }
                    </div>
                </div>
            break;
        default:
            fileList =
                <div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 dnd-file-icons d-flex justify-content-center content-animation" style={{ fontSize: 30 }}><Fa icon="file-text" size="5x" fixed /> </div>
                        <div className="col-sm-12 dnd-file d-flex justify-content-center content-animation" style={{ fontSize: 30 }}>{props.files.length} files uploaded</div>
                    </div>
                </div>
            break;
    }

    if (props.uploadActive === true) {
        return (
            <div className="tile-border">
                <div id="tile-upload" className="active">
                    <div >
                        <div>
                            <div>
                                <Dropzone className="content-animation row dnd-field d-flex justify-content-around pointer z-depth-1-half"
                                    getDataTransferItems={evt => fromEvent(evt)}
                                    onDrop={props.onDrop}
                                    onFileDialogCancel={props.onClear}>
                                    {fileList}
                                </Dropzone>
                            </div>
                        </div>
                    </div>
                    <div className="content-animation row ">
                        <div className="col-sm-12 d-flex justify-content-between">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" onClick={props.onConvert} disabled={props.noUpload}> Convert </MDBBtn>
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" onClick={props.onClear}> Clear </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else if (props.convertActive === true || props.resultActive === true) {
        return (
            <div className="tile-border">
                <div id="tile-upload" className="finished">
                    <div className="content-animation row dnd-field-complete ">
                        <div className="col-sm-12 icon-emerge-animation">
                            <Fa icon="check" className="icon" size="5x" fixed />
                        </div>
                    </div>
                    <div className="content-animation row d-flex justify-content-between">
                        <div className="col-sm-6">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button-disabled" type="button" disabled={true}> ... </MDBBtn>
                        </div>
                        <div className="col-sm-6">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button-disabled" type="button" value="Clear" disabled={true}> ... </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="tile-border">
                <div id="tile-upload" className="inactive">
                    <div className="content-animation row dnd-field-disabled ">
                        <div className="col-sm-12">
                            <Fa icon="ban" className="icon" size="5x" fixed />
                        </div>
                    </div>
                    <div className="content-animation row">
                        <div className="col-sm-12 d-flex justify-content-between">
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" disabled={true}> ... </MDBBtn>
                            <MDBBtn active color="#007079" className="btn btn-lg tile-button" type="button" value="Clear" disabled={true}> ... </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadFile;