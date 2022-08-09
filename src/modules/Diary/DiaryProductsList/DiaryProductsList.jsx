import DiaryProductsListItem from "./DiaryProductsListItem";
import PropTypes from "prop-types";
import styles from "./diaryProductsList.module.scss";

const DiaryProductsList = ({ eatenProducts, onClick }) => {
  const productAnswer = () => {
    if (eatenProducts.length > 0) {
      const elements = eatenProducts.map(({ title, weight, kcal, id }) => (
        <DiaryProductsListItem
          onClick={onClick}
          key={id}
          title={title}
          weight={weight}
          kcal={kcal}
          id={id}
        />
      ));
      return <ul className={styles.list}>{elements.reverse()}</ul>;
    }
    return <p className={styles.warn}>The list is empty, add products.</p>;
  };

  return <div className="wrapper_container">{productAnswer()}</div>;
};

DiaryProductsList.defaultProps = {
  eatenProducts: [],
};

DiaryProductsList.propTypes = {
  eatenProducts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      kcal: PropTypes.number.isRequired,
    })
  ),
};

export default DiaryProductsList;
