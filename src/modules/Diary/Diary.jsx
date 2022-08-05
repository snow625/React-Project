import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import DiaryDateCalendar from "./DiaryDateСalendar/DiaryDateСalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
import CircleButton from "../../shared/components/CircleButton/CircleButton";
import Loader from "../../shared/components/Loader/Loader";

import {
  addProduct,
  dayInfo,
  removeProduct,
} from "../../redux/summary/summary-operations";

import { getSummary } from "../../redux/summary/summary-selectors";

import {
  setDate,
  updateEatenProducts,
} from "../../redux/summary/summary-slice";
import styles from "./diary.module.scss";

const Diary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const summaryRedux = useSelector(getSummary);
  const { loading, error, eatenProducts, dayId, date } = summaryRedux;

  const getDayInfo = useCallback(
    (data) => {
      dispatch(setDate(data));
      dispatch(dayInfo(data));
    },
    [dispatch]
  );

  const relogin = (error) => {
    if (error?.status === 401) {
      navigate("/login");
    }
  };

  const addNewProduct = useCallback(
    (productData) => {
      const { id, weight } = productData;
      const updatedWeight = Number(weight);

      const totalProductInfo = {
        productId: id,
        weight: updatedWeight,
        date,
      };
      dispatch(addProduct(totalProductInfo));
    },
    [date, dispatch]
  );

  const deleteProductItem = useCallback(
    (id) => {
      const data = {
        dayId,
        eatenProductId: id,
      };
      dispatch(removeProduct(data));
      dispatch(updateEatenProducts(id));
    },
    [dayId, dispatch]
  );

  return (
    <>
      <div className={styles.wrapper}>
        <DiaryDateCalendar fetchDayInfo={getDayInfo} />
        <DiaryAddProductForm onSubmit={addNewProduct} />
        <DiaryProductsList
          eatenProducts={eatenProducts}
          onClick={deleteProductItem}
        />

        <CircleButton
          type="button"
          label="Add product button"
          mobile={true}
          iconNameInSprite="add"
        />
      </div>
      {relogin(error)}
      {loading && <Loader />}
    </>
  );
};

export default Diary;
