import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className = '', ...props }) => (
  <button
    onClick={onClick}
    className={[
      'bg-[#ffb300] text-white text-lg font-semibold px-8 py-2 rounded-full shadow hover:bg-[#ffd54f] hover:text-[#7c6a3c] transition-colors',
      className
    ].join(' ')}
    {...props}
  >
    {children}
  </button>
);


Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
