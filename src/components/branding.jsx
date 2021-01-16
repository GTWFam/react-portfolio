import React, { Component } from "react";
import Portrait from "../img/portrait.jpg";

class Branding extends Component {
  state = {};
  render() {
    return (
      <div className="branding">
        <div className="portrait">
          <img className="img-portrait" src={Portrait} alt="Portrait"></img>
        </div>
        <div className="mainText">
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam non
            quidem eius asperiores quibusdam, iusto suscipit voluptatum. Non,
            culpa. Iure, porro quas harum expedita amet saepe minus quisquam
            ratione nostrum?
          </p>
        </div>
      </div>
    );
  }
}

export default Branding;
