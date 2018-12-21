import React from 'react'
import { post } from 'axios';
import saveAs from "file-saver";

import UploadFile from './components/uploadfile.js'; 
import ConvertStatus from './components/convertstatus.js'; 
import Result from './components/result.js'; 

import './tiles.css';



class Tiles extends React.Component {

    state = {
        file: null,
        files: [],
        blob: null,
        noUpload: true,
        report: "Nothing to report",
        status: "Awaiting upload",
        progress: "0%",
    }

    onConvert = () => {
        this.setState({
            status: "Uploading file/files",
            progress: "50%",
        });
        this.props.setActiveTile("convert");
        const url = this.props.currentConverter.api;
        const formData = new FormData();

        if (this.props.currentConverter.multiupload === false) {
            formData.append('file', this.state.file);
        }
        else {
            formData.append('file', this.state.files);
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
            responseType: 'arraybuffer',
        }

        return post(url, formData, config).then((response) => {
            this.setState({
                status: "Preparing file/files for download",
                progress: "75%",
            });
            this.setState({
                blob: new Blob([response.data], {
                    type: this.props.currentConverter.downloadtype,
                    responseType: 'arraybuffer',
                })
            })
            console.log(response.formData);
            this.setState({
                report: "A file was successfully returned after conversion",
                status: "File/files ready for download",
                progress: "100%",
            });
            this.props.setActiveTile("result");
        })

        .catch((error) => {
            if (error == "Error: Request failed with status code 404") {
                this.setState({
                    report: "Error: Request failed with status code 404" + "\n" + "\n" + "Cannot find the converter. Check if you are online or if the API-connection string is correct.",
                });
            }
            else if (error == "Error: Request failed with status code 500") {
                this.setState({
                    report: "Error: Request failed with status code 500" + "\n" + "\n" + "Something failed internally in the converter. Check if you sent the correct filetype with the right format. If you did, the fault might lie within the converter.",
                });
            }
            else if (error == "Network Error") { 
                this.setState({
                    report: "Network Error" + "\n" + "\n" + "Something failed when connecting to the API. Check if you sent the correct filetype with the right format, or if the converter is online.",
                });
            }
                 
            this.props.setActiveTile("result");
        })
    }

    onDrop = (droppedFiles) => {
        this.setState({
            files: droppedFiles,
            file: droppedFiles[0],
            noUpload: false,
        });
        if (this.props.currentConverter.multiupload === false && droppedFiles.length > 1) {
            alert("This converter does not support conversion of multiple files! Errors may occur if you continue!");
        }
        else {
        }
    }

    onClear = () => {
        this.setState({
            files: [],
            file: null,
            blob: null,
            noUpload: true,
            report: "Nothing to report",
            status: "Awaiting upload",
            progress: "0%"
        });
    }

    onCancel = () => {
        this.onClear();
        this.onConvert();
        this.props.setActiveTile("result");
    }

    onDownload = () => {
        if (this.state.blob != null) {
            saveAs(this.state.blob, 'converted_file' + this.props.currentConverter.downloadtype);
        }
        else {
            alert("No converted file available. See Report for details");
        }
    }

    onReport = () => {
        alert(this.state.report);
    }

    onReset = () => {
        this.onClear();
        this.props.setActiveTile("upload");
    }

    render() {
        const {
            blob,
            file,
            files,
            noUpload,
            status,
            progress,
        } = this.state;

        return (
            <div className="row d-flex justify-content-center">
                <UploadFile files={files} uploadActive={this.props.uploadActive} convertActive={this.props.convertActive} resultActive={this.props.resultActive} noUpload={noUpload} onConvert={this.onConvert} onDrop={this.onDrop.bind(this)} onClear={this.onClear} />
                <ConvertStatus blob={blob} status={status} progress={progress} uploadActive={this.props.uploadActive} convertActive={this.props.convertActive} resultActive={this.props.resultActive} onCancel={this.onCancel} />
                <Result blob={blob} resultActive={this.props.resultActive} onReset={this.onReset} onDownload={this.onDownload} onReport={this.onReport}/>
            </div>
            
        );
    }
}

export default Tiles;