import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";
import PropTypes from "prop-types";

import style from "./RadioField.module.scss";

const RadioField = (props) => {
  const { label, name, value, onChange, type, checked } = props;

  const id = useMemo(() => nanoid(), []);

  return (
    <div className={style.wrapper}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input
        onChange={onChange}
        id={id}
        className={style.input}
        type={type}
        name={name}
        value={value}
        checked={checked}
      />
    </div>
  );
};

RadioField.defaultProps = {
  type: "radio",
  onChange: () => {},
};

RadioField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

export default RadioField;
