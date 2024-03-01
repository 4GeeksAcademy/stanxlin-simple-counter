//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Timer from "./component/timer.jsx"

// include your styles into the webpack bundle
import "../styles/index.css";

ReactDOM.render(
    <div>
        <Timer/>
    </div>,
    document.querySelector("#app")
)