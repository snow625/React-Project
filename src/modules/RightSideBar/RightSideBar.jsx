import style from "./RightSideBar.module.scss";
import { useSelector } from "react-redux";
import {
  summary,
  getdate,
  getFoodNotRecommended,
} from "../../redux/summary/summary-selectors";

const RightSideBar = () => {
  const daySummary = useSelector(summary);
  const currentDate = useSelector(getdate);
  const foodNotRecommended = useSelector(getFoodNotRecommended);

  const newCurrentDate = () => {
    if (currentDate) {
      const a = currentDate.split("");
      a.splice(4, 1, "/");
      const b = a;
      b.splice(7, 1, "/");

      return b.join("");
    }
    return;
  };

  const newSummary = () => {
    if (daySummary.dailyRate) {
      const dataValuesToMathFloor = {};

      Object.entries(daySummary).forEach(([key, value]) => {
        dataValuesToMathFloor[key] = Math.floor(value);
      });

      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
        dataValuesToMathFloor;

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

  const foodNotRecommendedList = () => {
    const elements = foodNotRecommended.map((el) => (
      <li className={style.li} key={el}>
        {el}
      </li>
    ));

    return <ol className={style.ol}>{elements}</ol>;
  };
  console.log(newSummary());

  const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
    newSummary();

  return (
    <>
      <div className={style.backbox}>
        <div className={style.box}>
          <div className={style.summary}>
            <h3 className={style.title}>{`Сводка за ${newCurrentDate()}`}</h3>
            <div className={style.flexbox}>
              <ul className={style.list}>
                <li className={style.item}>Осталось</li>
                <li className={style.item}>Употреблено</li>
                <li className={style.item}>Дневная норма</li>
                <li className={style.item}>% от нормы</li>
              </ul>

              <ul className={style.list}>
                <li className={style.item}>
                  <span className="{style.number}">{kcalLeft}</span> ккал
                </li>
                <li className={style.item}>
                  <span className="{style.number}">{kcalConsumed}</span> ккал
                </li>
                <li className={style.item}>
                  <span className="{style.number}">{dailyRate}</span> ккал
                </li>
                <li className={style.item}>
                  <span className="{style.number}">{percentsOfDailyRate}</span>{" "}
                  %
                </li>
              </ul>
            </div>
          </div>
          <div className={style.food}>
            <h3 className={style.sub_title}>Нерекомендуемые продукты:</h3>
            {foodNotRecommended.length > 0 ? (
              foodNotRecommendedList()
            ) : (
              <p className={style.text}>Здесь будет отображаться Ваш рацион</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
