import Notiflix from "notiflix";

const Alert = ({ message }) => {
  return Notiflix.Notify.warning(`${message}`, {
    timeout: 5000,
    fontFamily: "Verdana",
    fontSize: "14px",
    warning: { background: "#fc842d" },
  });
};

export default Alert;
