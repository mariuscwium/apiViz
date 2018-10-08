import React from "react";
import "./loader.css";

const Loader = props => {
  return (
    <div className="loadingWrapper">
      <div id="loader">
        <span className="loadingText">{props.text}</span>
        <div className="ls-particles ls-part-1" />
        <div className="ls-particles ls-part-2" />
        <div className="ls-particles ls-part-3" />
        <div className="ls-particles ls-part-4" />
        <div className="ls-particles ls-part-5" />
        <div className="lightsaber ls-left ls-green" />
        <div className="lightsaber ls-right ls-red" />
      </div>
    </div>
  );
};

export default Loader;
