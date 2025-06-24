import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({ value, onChange, min, max, ...props }) => (
  <input
    type="number"
    value={value}
    onChange={e => onChange(Number(e.target.value))}
    min={min}
    max={max}
    {...props}
    style={{ padding: "8px", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc", ...props.style }}
  />
);

NumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default NumberInput;
