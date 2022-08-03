import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
const Diary = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
      />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </>
  );
};

export default Diary;
