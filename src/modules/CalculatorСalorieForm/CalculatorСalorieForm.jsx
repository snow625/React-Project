import PropTypes from "prop-types";

import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioField from "../../shared/components/RadioField";

import useForm from "../../shared/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";

import style from "./calculatorСalorieForm.module.scss";

const CalculatorСalorieForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });
  const { weight, height, age, desiredWeight, bloodType } = state;

  return (
    <div className="wrapper_container">
      <div className={style.wrapper}>
        <h2 className={style.title}>
          Calculate your daily calorie intake right now
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={style.containerInputForm}>
            <div>
              <TextField
                onChange={handleChange}
                value={height}
                {...fields.height}
              />
              <TextField onChange={handleChange} value={age} {...fields.age} />
              <TextField
                onChange={handleChange}
                value={weight}
                {...fields.weight}
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                value={desiredWeight}
                {...fields.desiredWeight}
              />
              <p className={style.labelForBlood} id={"bloodType"}>
                Blood type *
              </p>
              <div className={style.radioButton}>
                <RadioField
                  onChange={handleChange}
                  checked={bloodType === "1"}
                  {...fields.bloodType1}
                />
                <RadioField
                  onChange={handleChange}
                  checked={bloodType === "2"}
                  {...fields.bloodType2}
                />
                <RadioField
                  onChange={handleChange}
                  checked={bloodType === "3"}
                  {...fields.bloodType3}
                />
                <RadioField
                  onChange={handleChange}
                  checked={bloodType === "4"}
                  {...fields.bloodType4}
                />
              </div>
            </div>
          </div>
          <div className={style.inputFormButton}>
            <Button type="submit" text="Start losing weight" />
          </div>
        </form>
      </div>
    </div>
  );
};

CalculatorСalorieForm.defaultProps = {
  onSubmit: () => {},
};

CalculatorСalorieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CalculatorСalorieForm;
