import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsLogin from "../../shared/hooks/useisLogin";
import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import Modal from "../../shared/components/Modal";
import ModalText from "../../shared/components/ModalText";
import { getDailyRateInGeneral } from "../../shared/services/API/daily-rate";
import style from "./homePage.module.scss";

const initialState = {
  calories: null,
  notAllowedProducts: [],
  isModalOpen: false,
  loading: false,
  error: null,
};
const HomePage = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const isLogin = useIsLogin();

  const handleClick = async (data) => {
    setState((prevState) => ({ ...prevState, error: null, loading: true }));
    try {
      const result = await getDailyRateInGeneral(data);
      const { dailyRate, notAllowedProducts } = result;
      const calories = Math.trunc(dailyRate);
      setState((prevState) => ({
        ...prevState,
        calories,
        notAllowedProducts,
        loading: false,
        isModalOpen: true,
      }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, error, loading: false }));
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
    return navigate("/register");
  };

  const { calories, notAllowedProducts, isModalOpen, loading, error } = state;
  return (
    <>
      <div className={`${style.wrapper} container`}>
        <CalculatorСalorieForm onSubmit={handleClick} />
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
    </>
  );
};
export default HomePage;
