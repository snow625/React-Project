import Diary from "../../modules/Diary/Diary";
import RightSideBar from "../../modules/RightSideBar";
import { useSelector } from "react-redux";
import { getErrorLoadingSummary } from "../../redux/summary/summary-selectors";
import { errorChecker } from "../../shared/utils/randomFunctions";

import style from "./diaryPage.module.scss";
const DiaryPage = () => {
  const { error } = useSelector(getErrorLoadingSummary);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.diary}>
          <Diary />
        </div>

        <RightSideBar />
      </div>
      {error && errorChecker(error)}
    </>
  );
};

export default DiaryPage;
