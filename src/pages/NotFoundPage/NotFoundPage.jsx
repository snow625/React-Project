import { Link } from "react-router-dom";
import style from "./notFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={`container ${style.wrapper}`}>
      <h2>
        404 Page not found <Link to={"/"}>Go Home?</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
