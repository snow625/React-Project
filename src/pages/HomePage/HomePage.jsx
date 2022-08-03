import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";
import style from "./homePage.module.scss";

const HomePage = () => {
  const handleClick = (data) => {
    console.log(data);
  };
  return (
    <div className={`${style.wrapper} container`}>
      <CalculatorСalorieForm onSubmit={handleClick} />
    </div>
  );
};
export default HomePage;
