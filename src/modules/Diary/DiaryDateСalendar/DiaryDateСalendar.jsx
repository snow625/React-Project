import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sprite from "../../../images/svg/sprite.svg";
import styles from "./diaryDateСalendar.module.scss";

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <DatePicker
          className={styles.datePicker}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
        />
        <svg className={styles.icon}>
          <use href={sprite + "#icon-calendar"}></use>
        </svg>
      </div>
    </div>
  );
};

export default DiaryDateCalendar;
