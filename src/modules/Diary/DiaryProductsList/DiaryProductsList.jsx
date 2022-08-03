import DiaryProductsListItem from "./DiaryProductsListItem";
import styles from "./diaryProductsList.module.scss";
const DiaryProductsList = () => {
  return (
    <div className="wrapper_container">
      <ul className={styles.list}>
        <DiaryProductsListItem />
        <DiaryProductsListItem />
        <DiaryProductsListItem />
        <DiaryProductsListItem />
        <DiaryProductsListItem />
        <DiaryProductsListItem />
      </ul>
    </div>
  );
};

export default DiaryProductsList;
