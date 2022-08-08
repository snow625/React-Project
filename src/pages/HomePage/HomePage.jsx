import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import Loader from "../../shared/components/Loader/Loader";
import Modal from "../../shared/components/Modal";
import ModalText from "../../shared/components/ModalText";
import { getDailyRateInGeneral } from "../../shared/services/API/daily-rate";
import { useModal } from "../../shared/hooks/useModal";
import { makeRandomProducts } from "../../shared/utils/randomFunctions";
import { toggleModalRedux } from "../../redux/modal/modal-slice";
import { errorChecker } from "../../shared/utils/randomFunctions";

import {
  loadingState,
  errorState,
} from "../../shared/utils/loadingErrorSetState";

import style from "./homePage.module.scss";

const initialState = {
  calories: null,
  notAllowedProducts: [],
  loading: false,
  error: null,
  isModal: false,
};

const HomePage = () => {
  const [state, setState] = useState(initialState);
  const { calories, notAllowedProducts, loading, error, isModal } = state;
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
      const result = await getDailyRateInGeneral(dataValuesToNumbers);
      const { dailyRate, notAllowedProducts } = result;

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
      console.log(error);
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
    return navigate("/register");
  };

  return (
    <>
      <div className={`${style.wrapper} container`}>
        <CalculatorСalorieForm onSubmit={handleClick} />
      </div>
      {loading && <Loader />}
      {error && errorChecker(error)}
      {isModalOpen && (
        <Modal>
          <ModalText
            calories={calories}
            list={notAllowedProducts}
            onClick={modalButtonClick}
          />
        </Modal>
      )}
    </>
  );
};
export default HomePage;
