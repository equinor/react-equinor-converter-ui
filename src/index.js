import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import CurrentPage from "./currentpage/currentpage.js";



ReactDOM.render(<CurrentPage />, document.getElementById('root'));

serviceWorker.unregister();


