import Diary from "../../modules/Diary/Diary";
import RightSideBar from "../../shared/components/RightSideBar";
import style from "./diaryPage.module.scss";
const DiaryPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.diary}>
        <Diary />
      </div>
      <RightSideBar />
    </div>
  );
};

export default DiaryPage;
