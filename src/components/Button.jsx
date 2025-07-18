import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className = '', ...props }) => (
  <button
    onClick={onClick}
    className={[
      'bg-[var(--global-color-accent)]',
      'text-[var(--global-color-text)]',
      'font-sans',
      'text-lg',
      'font-semibold',
      'px-8',
      'py-2',
      'rounded-full',
      'shadow',
      'transition-colors',
      'border',
      'border-[var(--global-color-border)]',
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
  className: PropTypes.string,
};

export default Button;
