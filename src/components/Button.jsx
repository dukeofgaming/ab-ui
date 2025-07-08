import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, ...props }) => (
  <button
    onClick={onClick}
    {...props}
    style={{
      padding: "8px 16px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "none",
      background: "#007bff",
      color: "#fff",
      cursor: "pointer",
      ...props.style
    }}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
