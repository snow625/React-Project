import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./diaryDateСalendar.module.scss";

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className={styles.datePicker}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default DiaryDateCalendar;
