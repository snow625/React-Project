import { useState } from "react";
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
import { getDailyRateForUser } from "../../shared/services/API/daily-rate";
import { errorChecker } from "../../shared/utils/randomFunctions";
import {
  loadingState,
  errorState,
} from "../../shared/utils/loadingErrorSetState";

import style from "./calculatePage.module.scss";

const initialState = {
  calories: null,
  notAllowedProducts: [],
  isModalOpen: false,
  loading: false,
  error: null,
};

const CalculatePage = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const userId = useSelector(getUserId);

  const handleClick = async (data) => {
    setState(loadingState);

    const dataValuesToNumbers = {};
    Object.entries(data).forEach(([key, value]) => {
      dataValuesToNumbers[key] = Number(value);
    });

    try {
      const result = await getDailyRateForUser(userId, dataValuesToNumbers);
      const { dailyRate, notAllowedProducts } = result;

      dispath(updateSummaryAndnotAllowedProducts(result));

      const products = makeRandomProducts(notAllowedProducts);

      const calories = Math.trunc(dailyRate);
      setState((prevState) => ({
        ...prevState,
        calories,
        notAllowedProducts: products,
        loading: false,
        isModalOpen: true,
      }));
    } catch (error) {
      setState((prevState) => {
        return errorState(prevState, error);
      });
    }
  };

  const toggleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const modalButtonClick = () => {
    toggleModal();
    return navigate("/diary");
  };

  const { calories, notAllowedProducts, isModalOpen, loading, error } = state;

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.form}>
          <CalculatorСalorieForm onSubmit={handleClick} />
        </div>
        <RightSideBar />
      </div>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
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
