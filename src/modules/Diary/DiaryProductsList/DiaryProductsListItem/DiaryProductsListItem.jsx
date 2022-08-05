import PropTypes from "prop-types";
import sprite from "../../../../assets/svg/sprite.svg";
import styles from "./diaryProductsListItem.module.scss";

const DiaryListItem = ({ title, weight, kcal, id, onClick }) => {
  return (
    <li className={styles.listItem} key={id}>
      <span className={styles.product}>{title}</span>
      <span className={styles.grams}>{weight}</span>
      <span className={styles.calories}>{Math.round(kcal)} kcal</span>
      <button
        className={title.length > 24 ? styles.doubleBtn : styles.btn}
        onClick={() => onClick(id)}
        aria-label="button delete element"
      >
        <svg className={styles.icon}>
          <use href={sprite + "#icon-remove"}></use>
        </svg>
      </button>
    </li>
  );
};

DiaryListItem.propTypes = {
  eatenProducts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      kcal: PropTypes.number.isRequired,
    })
  ),
};

export default DiaryListItem;
