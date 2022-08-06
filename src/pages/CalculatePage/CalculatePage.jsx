import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import RightSideBar from "../../modules/RightSideBar";
import Modal from "../../shared/components/Modal";
import Loader from "../../shared/components/Loader/Loader";
import ModalText from "../../shared/components/ModalText";
import { getUserId } from "../../redux/auth/auth-selectors";
import { updateSummaryAndnotAllowedProducts } from "../../redux/summary/summary-slice";
import { makeRandomProducts } from "../../shared/utils/randomFunctions";
import { toggleModalRedux } from "../../redux/modal/modal-slice";

import { getDailyRateForUser } from "../../shared/services/API/daily-rate";
import { errorChecker } from "../../shared/utils/randomFunctions";
import { useModal } from "../../shared/hooks/useModal";

import {
  loadingState,
  errorState,
} from "../../shared/utils/loadingErrorSetState";

import style from "./calculatePage.module.scss";

const initialState = {
  calories: null,
  notAllowedProducts: [],
  isModal: false,
  loading: false,
  error: null,
};

const CalculatePage = () => {
  const [state, setState] = useState(initialState);
  const { calories, notAllowedProducts, isModal, loading, error } = state;

  const userId = useSelector(getUserId);
  const navigate = useNavigate();
  const isModalOpen = useModal();
  const dispatch = useDispatch();

  const handleClick = async (data) => {
    setState(loadingState);
    const dataValuesToNumbers = {};
    Object.entries(data).forEach(([key, value]) => {
      dataValuesToNumbers[key] = Number(value);
    });

    try {
      const result = await getDailyRateForUser(userId, dataValuesToNumbers);
      const { dailyRate, notAllowedProducts } = result;

      dispatch(updateSummaryAndnotAllowedProducts(result));

      const products = makeRandomProducts(notAllowedProducts);

      const calories = Math.trunc(dailyRate);
      setState((prevState) => ({
        ...prevState,
        calories,
        notAllowedProducts: products,
        loading: false,
        isModal: true,
      }));
    } catch (error) {
      setState((prevState) => {
        return errorState(prevState, error);
      });
    }
  };

  useEffect(() => {
    if (isModal) {
      dispatch(toggleModalRedux());
      setState((prevState) => ({ ...prevState, isModal: false }));
    }
  }, [dispatch, isModal]);

  const modalButtonClick = () => {
    dispatch(toggleModalRedux());
    setState((prevState) => ({ ...prevState, isModal: false }));
    return navigate("/diary");
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.form}>
          <CalculatorСalorieForm onSubmit={handleClick} />
        </div>
        <RightSideBar />
      </div>

      {isModalOpen && (
        <Modal>
          <ModalText
            calories={calories}
            list={notAllowedProducts}
            onClick={modalButtonClick}
          />
        </Modal>
      )}
      {loading && <Loader />}
      {error && errorChecker(error)}
    </>
  );
};

export default CalculatePage;
