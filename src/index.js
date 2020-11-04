import React from "react";
import ReactDOM from "react-dom";
import Provider from "./store/store" //importer Provider de store

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider>  
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

/* Englober l'APP par Provider de store */