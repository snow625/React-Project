// import { Link } from "react-router-dom";
import CalculateForm from "../../modules/CalculateForm/CalculateForm";

const HomePage = () => {
  const handleClick = (data) => {
    console.log(data);
  };
  return <CalculateForm onSubmit={handleClick} />;
};
export default HomePage;
