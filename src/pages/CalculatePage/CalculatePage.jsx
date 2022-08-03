import CalculatorСalorieForm from "../../modules/CalculatorСalorieForm";

const CalculatePage = () => {
  const handleClick = (data) => {
    console.log(data);
  };
  return <CalculatorСalorieForm onSubmit={handleClick} />;
};

export default CalculatePage;
