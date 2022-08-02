import Button from "../Button";
import style from "./modalText.module.scss"

const ModalText = () => {
    return <>
    <h2 className={style.title}> Your recommended daily calorie intake is</h2>
    <p className={style.text}>2800 <span className={style.amount}>ккал</span></p>
    <h3 className={style.sub_title}>Foods you should not eat</h3>
    <ol className={style.list}>
      <li className={style.item}>Flour roducts</li>
      <li className={style.item}>Milk</li>
      <li className={style.item}>Red meat</li>
      <li className={style.item}>Smoked meats</li>
    </ol>
    <Button text="Start losing weight"/>
    </>
}
export default ModalText;