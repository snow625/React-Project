import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sprite from "../../../images/svg/sprite.svg";
import styles from "./diaryDateСalendar.module.scss";

const DiaryDateCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="wrapper_container">
      <div className={styles.wrapper}>
        <DatePicker
          className={styles.datePicker}
          selected={date}
          onChange={(date) => setDate(date)}
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
