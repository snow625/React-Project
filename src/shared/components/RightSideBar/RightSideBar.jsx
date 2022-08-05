import style from "./RightSideBar.module.scss";
import { useSelector } from "react-redux";
import { summary, getdate } from "../../../redux/summary/summary-selector";

const RightSideBar = () => {
  const daySummary = useSelector(summary);
  const currentDate = useSelector(getdate);

  const newSummary = () => {
    if (daySummary.kcalLeft) {
      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
        daySummary;
      return {
        kcalLeft,
        kcalConsumed,
        dailyRate,
        percentsOfDailyRate,
      };
    }
    return {
      kcalLeft: "000",
      kcalConsumed: "000",
      dailyRate: "000",
      percentsOfDailyRate: "000",
    };
  };

  const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
    newSummary();

  return (
    <>
      <div className={style.backbox}>
        <div className={style.box}>
          <div className={style.summary}>
            <h3 className={style.title}>{`Summary for ${currentDate}`}</h3>
            <div className={style.flexbox}>
              <ul className={style.list}>
                <li className={style.item}>Left</li>
                <li className={style.item}>Consumed</li>
                <li className={style.item}>Daily rate</li>
                <li className={style.item}>n% of normal</li>
              </ul>
              <ul className={style.list}>
                <li className={style.item}>
                  <span className="{style.number}">{kcalLeft}</span>kcal
                </li>
                <li className={style.item}>
                  <span className="{style.number}">{kcalConsumed}</span>kcal
                </li>
                <li className={style.item}>
                  <span className="{style.number}">{dailyRate}</span>kcal
                </li>
                <li className={style.item}>
                  <span className="{style.number}">{percentsOfDailyRate}</span>
                  kcal
                </li>
              </ul>
            </div>
          </div>
          <div className={style.food}>
            <h3 className={style.sub_title}>Food not recommended</h3>
            <p className={style.text}>Your diet will be displayed here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
