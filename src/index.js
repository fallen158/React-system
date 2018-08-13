import ReactDOM from "react-dom";
import React from 'react';
import registerServiceWorker from "./registerServiceWorker";
import App from './router/index.js'


ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
