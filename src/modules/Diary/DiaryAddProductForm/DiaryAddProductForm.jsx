import CircleButton from "../../../shared/components/CircleButton/CircleButton";
import fields from "./fields";
import styles from "./diaryAddProductForm.module.scss";
const DiaryAddProductForm = () => {
  return (
    <div className="container">
      <form className={styles.addForm}>
        <div className={styles.wrapperProduct}>
          <label htmlFor={"product"} className={styles.label}>
            Enter your product name
          </label>
          <input id={"product"} className={styles.input} {...fields.product} />
        </div>
        <div className={styles.wrapperGrams}>
          <label htmlFor={"grams"} className={styles.labelGrams}>
            Grams
          </label>
          <input id={"grams"} className={styles.input} {...fields.grams} />
        </div>
        {/* <button className={styles.btn} type="submit" aria-label="Add product">
          <svg className={styles.icon}>
            <use href={sprite + "#icon-add"}></use>
          </svg>
        </button> */}
        <CircleButton type="submit" label="Add product button" />
      </form>
    </div>
  );
};

export default DiaryAddProductForm;
