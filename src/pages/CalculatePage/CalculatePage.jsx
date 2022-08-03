import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import RightSideBar from "../../shared/components/RightSideBar";
import style from "./calculatePage.module.scss";

const CalculatePage = () => {
  const handleClick = (data) => {
    console.log(data);
  };
  return (
    <div className={style.wrapper}>
      <CalculatorСalorieForm onSubmit={handleClick} />
      <RightSideBar />
    </div>
  );
};

export default CalculatePage;
