import style from "./calculatorСalorieForm.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioField from "../../shared/components/RadioField";

import useForm from "../../shared/hooks/useForm";
import initialState from "./initialState";

const CalculatorСalorieForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });

  const { weight, height, age, desiredWeight, bloodType } = state;

  return (
    <div className={style.wrapper}>
      <div className="container">
        <h2 className={style.title}>
          Calculate your daily calorie intake right now
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={style.containerInputForm}>
            <div>
              <TextField
                onChange={handleChange}
                label="Height *"
                type="text"
                name="height"
                value={height}
              />
              <TextField
                onChange={handleChange}
                label="Age *"
                type="text"
                name="age"
                value={age}
              />
              <TextField
                onChange={handleChange}
                label="Current Weight *"
                type="text"
                name="weight"
                value={weight}
              />
            </div>
            <div>
              <TextField
                onChange={handleChange}
                label="Desired weight *"
                type="text"
                name="desiredWeight"
                value={desiredWeight}
              />
              <p className={style.labelForBlood} id={"bloodType"}>
                Blood type *
              </p>
              <div className={style.radioButton}>
                <RadioField
                  onChange={handleChange}
                  label="1"
                  type="radio"
                  name="bloodType"
                  value="1"
                  checked={bloodType === "1"}
                />
                <RadioField
                  onChange={handleChange}
                  label="2"
                  type="radio"
                  name="bloodType"
                  value="2"
                  checked={bloodType === "2"}
                />
                <RadioField
                  onChange={handleChange}
                  label="3"
                  type="radio"
                  name="bloodType"
                  value="3"
                  checked={bloodType === "3"}
                />
                <RadioField
                  onChange={handleChange}
                  label="4"
                  type="radio"
                  name="bloodType"
                  value="4"
                  checked={bloodType === "4"}
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

export default CalculatorСalorieForm;
