import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";

const HomePage = () => {
  const handleClick = (data) => {
    console.log(data);
  };
  return <CalculatorСalorieForm onSubmit={handleClick} />;
};
export default HomePage;
