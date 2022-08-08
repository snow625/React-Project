import { nanoid } from "@reduxjs/toolkit";
import { useMemo } from "react";
import PropTypes from "prop-types";

import style from "./textField.module.scss";

const TextField = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    required,
    type,
    pattern,
    title,
    minLength,
    maxLength,
    min,
    max,
  } = props;

  const id = useMemo(() => nanoid(), []);

  return (
    <div className={style.wrapper}>
      <input
        onChange={onChange}
        id={id}
        className={style.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
      />
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
  required: true,
  onChange: () => {},
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
};

export default TextField;
