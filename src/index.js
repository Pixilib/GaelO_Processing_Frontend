import React from "react";
import ReactDOM from "react-dom";
import image from "./assets/images/gaelo-logo.svg";
import ControlledTabs from "./Component-Root/Component-Tabs/Tabs";

import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center title">
          <Image src={image} fluid height="25%" width="25%" />
        </div>
        <ControlledTabs />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
