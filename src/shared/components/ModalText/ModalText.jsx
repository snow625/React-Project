import PropTypes from "prop-types";
import Button from "../Button";
import ModalList from "./ModalList/ModalList";
import style from "./modalText.module.scss";

const ModalText = ({ calories, list, onClick }) => {
  return (
    <>
      <h2 className={style.title}> Your recommended daily calorie intake is</h2>
      <p className={style.text}>
        {calories} <span className={style.amount}>ккал</span>
      </p>
      <h3 className={style.sub_title}>Foods you should not eat</h3>
      <ModalList list={list} />

      <Button type="button" onClick={onClick} text="Start losing weight" />
    </>
  );
};

ModalText.defaultProps = {
  list: [],
  onClick: () => {},
};

ModalText.propTypes = {
  calories: PropTypes.number.isRequired,
  list: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default ModalText;
