import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import RightSideBar from "../../shared/components/RightSideBar";
import Modal from "../../shared/components/Modal";
import ModalText from "../../shared/components/ModalText";
import { getUserId } from "../../redux/auth/auth-selector";
import { getDailyRateForUser } from "../../shared/services/API/daily-rate";
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
  const userId = useSelector(getUserId);

  const handleClick = async (data) => {
    setState((prevState) => ({ ...prevState, error: null, loading: true }));

    let dataValuesToNumbers = {};

    Object.entries(data).forEach(([key, value]) => {
      dataValuesToNumbers[key] = Number(value);
    });

    try {
      const result = await getDailyRateForUser(userId, dataValuesToNumbers);
      const { dailyRate, notAllowedProducts, summaries } = result;

      // const products = () => {
      //   return notAllowedProducts.length > 10 ? notAllowedProducts.slice(0,10) : notAllowedProducts
      // }

      const products = () => {
        if (notAllowedProducts.length > 10) {
          const randomIdx = [];

          for (let i = 0; i < 10; i += 1) {
            randomIdx.push(
              Math.floor(Math.random() * (notAllowedProducts.length - 1) + 1)
            );
          }
          return notAllowedProducts.filter((_, idx) => randomIdx.includes(idx));
        }
        return notAllowedProducts;
      };

      const calories = Math.trunc(dailyRate);
      setState((prevState) => ({
        ...prevState,
        calories,
        notAllowedProducts: products(),
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
    </>
  );
};

export default CalculatePage;
