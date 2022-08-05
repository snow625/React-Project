import Notiflix from "notiflix";

const Alert = ({ message, type }) => {
  return Notiflix.Notify.warning(`${message}`, {
    timeout: 5000,
    fontFamily: "Verdana",
    fontSize: "14px",
    position: "center-top",

    warning: { background: "#fc842d" },
  });
};

export default Alert;
// failure
// success
// warning

// 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
