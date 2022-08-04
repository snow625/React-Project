import style from "../modalText.module.scss";

const ModalList = ({ list }) => {
  const elements = () => {
    if (list.length > 0) {
      const items = list.map((el) => <li className={style.item} key={el}>{el}</li>);
      return <ol className={style.list}>{items}</ol>;
    }
    return <p className={style.item}>You are allowed to eat everything</p>;
  };

  return elements();
};

export default ModalList;
