import style from "./RightSideBar.module.scss";

const RightSideBar = () => {
  return (
    <>
      <div className={style.backbox}>
        <div className="container">
          <div className={style.box}>
            <div className={style.summary}>
              <h3 className={style.title}>Summary for 06/20/2020</h3>
              <div className={style.flexbox}>
                <ul className={style.list}>
                  <li className={style.item}>Left</li>
                  <li className={style.item}>Consumed</li>
                  <li className={style.item}>Daily rate</li>
                  <li className={style.item}>n% of normal</li>
                </ul>
                <ul className={style.list}>
                  <li className={style.item}>
                    <span className="{style.number}">000</span>kcal
                  </li>
                  <li className={style.item}>
                    <span className="{style.number}">000</span>kcal
                  </li>
                  <li className={style.item}>
                    <span className="{style.number}">000</span>kcal
                  </li>
                  <li className={style.item}>
                    <span className="{style.number}">000</span>kcal
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
      </div>
    </>
  );
};

export default RightSideBar;
