import "../styles/Button.css";

import React from "react";
import PropTypes from "prop-types";

function Button(props) {
    return (
      <React.Fragment>
        <button className="Btn">{props.value}</button>
      </React.Fragment>
    );
  }

  Button.propTypes = {
      value: PropTypes.string.isRequired,
      prop2: PropTypes.number.isRequired,
      prop3: PropTypes.bool
  };
  
  export default Button;