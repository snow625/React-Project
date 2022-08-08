import PropTypes from "prop-types";
import Button from "../Button";
import ModalList from "./ModalList/ModalList";
import style from "./modalText.module.scss";

const ModalText = ({ calories, list, onClick }) => {
  return (
    <>
      <h2 className={style.title}>
        Ваша рекомендуемая суточная норма калорий составляет:
      </h2>
      <p className={style.text}>
        {calories} <span className={style.amount}>ккал</span>
      </p>
      <h3 className={style.sub_title}>
        Продукты, которые вам не рекомендуется употреблять
      </h3>
      <ModalList list={list} />

      <Button type="button" onClick={onClick} text="Начать худеть" />
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
