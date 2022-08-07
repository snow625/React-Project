import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

import DiaryDateCalendar from "./DiaryDateСalendar/DiaryDateСalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
import CircleButton from "../../shared/components/CircleButton/CircleButton";
import Loader from "../../shared/components/Loader/Loader";
import Modal from "../../shared/components/Modal";

import { useModal } from "../../shared/hooks/useModal";

import { toggleModalRedux } from "../../redux/modal/modal-slice";

import {
  addProduct,
  dayInfo,
  removeProduct,
} from "../../redux/summary/summary-operations";

import { getSummary } from "../../redux/summary/summary-selectors";
import { setDate } from "../../redux/summary/summary-slice";
import styles from "./diary.module.scss";

const Diary = () => {
  const isModalOpen = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nonMobile = !useMediaPredicate("(max-width: 768px)");

  const mobile = useMediaPredicate("(max-width: 768px)");

  const summaryRedux = useSelector(getSummary);
  const { loading, error, eatenProducts, dayId, date, notAllowedProducts } =
    summaryRedux;

  const isCalculateFinished = notAllowedProducts.length > 0 ? true : false;

  const getDayInfo = useCallback(
    (data) => {
      dispatch(setDate(data));
      dispatch(dayInfo(data));
    },
    [dispatch]
  );

  const addNewProduct = (productData) => {
    const { id, weight } = productData;
    const updatedWeight = Number(weight);
    const totalProductInfo = {
      productId: id,
      weight: updatedWeight,
      date,
    };
    dispatch(addProduct(totalProductInfo));
    if (mobile) {
      dispatch(toggleModalRedux());
    }
  };

  const deleteProductItem = useCallback(
    (id) => {
      const data = {
        dayId,
        eatenProductId: id,
      };
      dispatch(removeProduct(data));
    },
    [dayId, dispatch]
  );

  const relogin = (error) => {
    if (error?.status === 401) {
      navigate("/login");
    }
  };

  const mobileCircleBtnClick = () => {
    dispatch(toggleModalRedux());
  };

  return (
    <>
      {isCalculateFinished && (
        <div className={styles.wrapper}>
          <DiaryDateCalendar fetchDayInfo={getDayInfo} />
           {nonMobile && (
          <DiaryAddProductForm isMobile={false} onSubmit={addNewProduct} />
        )}
          <DiaryProductsList
            eatenProducts={eatenProducts}
            onClick={deleteProductItem}
          />
          <div className={styles.btn}>
            <CircleButton
              type="button"
              label="Add product button"
              mobile={true}
              iconNameInSprite="add"
              onClick={mobileCircleBtnClick}
            />
          </div>
        </div>
      )}
      {!isCalculateFinished && (
        <div className={styles.wrapper}>
          <div className={styles.visibility}>
            <DiaryDateCalendar fetchDayInfo={getDayInfo} />
          </div>
          <div className={styles.wrapperComponent}>
            <h3 className={styles.title}>Здравствуй новый пользоватеть!</h3>
            <p className={styles.text}>
              Наше приложение предлагает Вам соблюдать диету и рассчитывать
              каллории. Для того чтобы начать худеть сначала{" "}
              <Link className={styles.linkTo} to={"/calculate"}>
                Рассчитай диету
              </Link>{" "}
            </p>
          </div>
        </div>
      )}
      {error && relogin(error)}
      {loading && <Loader />}
      {isModalOpen && (
        <Modal>
          <DiaryAddProductForm isMobile={true} onSubmit={addNewProduct} />
        </Modal>
      )}
    </>
  );
};

export default Diary;
