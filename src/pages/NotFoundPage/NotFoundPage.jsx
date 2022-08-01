import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>
        404 Page not found <Link to={"/"}>Go Home?</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
