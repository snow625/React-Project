import Notiflix from "notiflix";

export const AlertWarning = ({ message }) => {
  return Notiflix.Notify.warning(`${message}`, {
    timeout: 5000,
    fontFamily: "Verdana",
    fontSize: "14px",
    warning: { background: "#fc842d" },
  });
};

export const AlertSuccess = ({ message }) => {
  return Notiflix.Notify.success(`${message}`, {
    timeout: 3000,
    fontFamily: "Verdana",
    fontSize: "14px",
  });
};

export const AlertError = ({ message }) => {
  return Notiflix.Notify.failure(`${message}`, {
    timeout: 5000,
    fontFamily: "Verdana",
    fontSize: "14px",
  });
};
