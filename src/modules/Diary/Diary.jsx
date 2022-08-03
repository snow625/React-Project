import DiaryDateCalendar from "./DiaryDateСalendar/DiaryDateСalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
import CircleButton from "../../shared/components/CircleButton/CircleButton";
import styles from "./diary.module.scss";

const Diary = () => {
  return (
    <div className={styles.wrapper}>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
      <CircleButton type="button" label="Add product button" mobile={true} />
    </div>
  );
};

export default Diary;
