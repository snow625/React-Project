import PropTypes from "prop-types";
import styles from "./productSelector.module.css";

const ProductSelector = ({ id, productsList }) => {
  const preparedList =
    productsList.length > 10 ? productsList.slice(0, 10) : productsList;
  const elements = preparedList.map((product) => {
    const { _id, title } = product;
    const { ru } = title;
    return (
      <option className={styles.option} key={_id} id={_id} value={ru}>
        {ru}
      </option>
    );
  });

  return (
    <datalist className={styles.select} id={id}>
      {elements}
    </datalist>
  );
};

ProductSelector.defaultProps = {
  productsList: [],
};

ProductSelector.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.shape({
        ru: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductSelector;
