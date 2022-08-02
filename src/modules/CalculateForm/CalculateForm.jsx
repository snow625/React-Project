import style from "./CalculateForm.module.scss";
import Button from "../../shared/components/Button";
import TextField from "../../shared/components/TextField";
import RadioField from "../../shared/components/RadioField";

const CalculateForm = () => {
  return (
    <div>
      <h2 className={style.title}>
        Calculate your daily calorie intake right now
      </h2>
      <form>
        <div className={style.containerInputForm}>
          <div>
            <TextField label="Height *" type="text" name="height" />
            <TextField label="Age *" type="text" name="age" value="" />
            <TextField
              label="Current Weight *"
              type="text"
              name="currentWeight"
              value=""
            />
          </div>
          <div>
            <TextField
              label="Desired weight *"
              type="text"
              name="desingWaight"
              value=""
            />
            <p className={style.labelForBlood} id="blood">
              Blood type *
            </p>
            <div className={style.radioButton}>
              <RadioField label="1" type="radio" name="blood" value="1" />
              <RadioField label="2" type="radio" name="blood" value="2" />
              <RadioField label="3" type="radio" name="blood" value="3" />
              <RadioField label="4" type="radio" name="blood" value="4" />
            </div>
          </div>
        </div>
        <div className={style.inputFormButton}>
          <Button text="Start losing weight" />
        </div>
      </form>
    </div>
  );
};

export default CalculateForm;
