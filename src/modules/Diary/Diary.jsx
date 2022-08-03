import DiaryDateCalendar from "./DiaryDateСalendar/DiaryDateСalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
// import styles from "./diary.module.css";

const Diary = () => {
  return (
    <div>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};

export default Diary;
