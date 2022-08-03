import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./diaryProductsList.module.scss";
const DiaryProductsList = () => {
  return (
    <ul className={styles.list}>
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
      <DiaryProductsListItem />
    </ul>
  );
};

export default DiaryProductsList;
