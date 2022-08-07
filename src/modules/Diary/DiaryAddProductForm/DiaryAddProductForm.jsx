import { useEffect } from "react";
import PropTypes from "prop-types";
import CircleButton from "../../../shared/components/CircleButton/CircleButton";
import ProductSelector from "./ProductSelector/ProductSelector";
import Button from "../../../shared/components/Button";
import useForm from "../../../shared/hooks/useForm";
import { debouncedSearchProduct } from "../../../shared/services/API/product-search";
import {
  // loadingState,
  errorState,
} from "../../../shared/utils/loadingErrorSetState";
import { errorChecker } from "../../../shared/utils/randomFunctions";
import Loader from "../../../shared/components/Loader/Loader";
import sprite from "../../../assets/svg/sprite.svg";
import initialState from "./initialState";
import fields from "./fields";
import styles from "./diaryAddProductForm.module.scss";

const DiaryAddProductForm = ({ isMobile, onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
    isReset: true,
  });
  const {
    product,
    foundProducts,
    currentProduct,
    weight,
    clearButton,
    loading,
    error,
  } = state;

  useEffect(() => {
    const findProduct = async (product) => {
      setState((prevState) => ({
        ...prevState,
        error: null,
        clearButton: false,
      }));
      try {
        const result = await debouncedSearchProduct(product);
        setState((prevState) => ({
          ...prevState,
          foundProducts: result,
          loading: false,
        }));
      } catch (error) {
        setState((prevState) => {
          return errorState(prevState, error);
        });
      }
    };
    if (currentProduct) {
      return;
    }
    if (product.length > 2) {
      findProduct(product);
    }
  }, [product, currentProduct, setState]);

  const setCurrentProduct = (selectedProduct) => {
    const requiredId = foundProducts.find(
      (product) => product.title.ru === selectedProduct
    )._id;
    setState((prevState) => ({
      ...prevState,
      product: selectedProduct,
      currentProduct: selectedProduct,
      id: requiredId,
      clearButton: true,
    }));
  };

  const onSelect = (event) => {
    handleChange(event);
    const { value } = event.target;
    if (foundProducts.length > 0) {
      setCurrentProduct(value);
    }
  };

  const clearState = () => setState(initialState);

  return (
    <div className="wrapper_container">
      <form
        className={isMobile ? styles.mobileAddForm : styles.addForm}
        onSubmit={handleSubmit}
      >
        <div className={styles.wrapperProduct}>
          <label htmlFor={"product"} className={styles.label}>
            Введите название продукта
          </label>
          <input
            list="productsToSelect"
            className={styles.input}
            value={product}
            onChange={onSelect}
            {...fields.product}
          />
          <ProductSelector id="productsToSelect" productsList={foundProducts} />
          {clearButton && (
            <button
              className={styles.clearBtn}
              onClick={clearState}
              aria-label="clear input button"
            >
              <svg className={styles.icon}>
                <use href={sprite + "#icon-remove"}></use>
              </svg>
            </button>
          )}
        </div>
        <div className={styles.wrapperGrams}>
          <label htmlFor={"weight"} className={styles.labelGrams}>
            Grams
          </label>
          <input
            className={styles.input}
            value={weight}
            onChange={handleChange}
            {...fields.weight}
          />
        </div>
        {isMobile ? (
          <div className={styles.addBtn}>
            <Button type="submit" text="Add" white={false} />
          </div>
        ) : (
          <CircleButton
            type="submit"
            label="Add product button"
            iconNameInSprite="add"
          />
        )}
      </form>
      {loading && <Loader />}
      {error && errorChecker(error)}
    </div>
  );
};

DiaryAddProductForm.defaultProps = {
  onSubmit: () => {},
};

DiaryAddProductForm.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default DiaryAddProductForm;
