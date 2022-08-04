import PropTypes from "prop-types";
import styles from "./productSelector.module.css";

const ProductSelector = ({ list, onChange }) => {
  const preparedList = list.length > 10 ? list.slice(0, 10) : list;
  const elements = preparedList.map((product) => {
    const { _id, title } = product;
    const { ru } = title;
    return (
      <option key={_id} id={_id} value={ru}>
        {ru}
      </option>
    );
  });

  const selectHandler = ({ target }) => {
    const { value } = target;
    onChange(value);
  };

  return (
    <select className={styles.select} onChange={selectHandler}>
      {elements}
    </select>
  );
};

ProductSelector.defaultProps = {
  list: [],
  onChange: () => {},
};

ProductSelector.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.shape({
        ru: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductSelector;
