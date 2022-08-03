import DiaryDateCalendar from "./DiaryDateСalendar/DiaryDateСalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
import styles from "./diary.module.css";

const Diary = () => {
  return (
    <>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </>
  );
};

export default Diary;
