import React from 'react';
import jsonContactList from "../../json/contactlist.json";

import "../pages.css";



const ContactPage = () => {
    return (
        <div className="container container_size in-back entry-animation">
            <div className="in-back">
                <h1 className="col-sm-12 headline2 display-4">Contact List</h1>
                <br />
                <div className="freetext"> If you have any bugs or issues to report, or you need extraordinary help with the service, please contact a person from the development team. </div>
                <br />
                <br />
                <div>
                    {
                        jsonContactList.map(obj => <div key={obj.id}>
                            <div className="font-weight-bold freetext" >{obj.name}</div>
                            <div className="freetext" >{obj.title}</div>
                            <div className="freetext" >{obj.email}</div>
                            <br />
                        </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ContactPage;