import sprite from "../../../../images/svg/sprite.svg";
import styles from "./diaryProductsListItem.module.scss";

const DiaryListItem = () => {
  return (
    <li className={styles.listItem}>
      <span className={styles.product}>Pork</span>
      <span className={styles.grams}>100 g</span>
      <span className={styles.calories}>320 kcal</span>
      <button className={styles.btn}>
        <svg className={styles.icon}>
          <use href={sprite + "#icon-remove"}></use>
        </svg>
      </button>
    </li>
  );
};

export default DiaryListItem;
