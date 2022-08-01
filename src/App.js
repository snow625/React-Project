import Header from "./modules/Header";

import UserRoutes from "./UserRoutes";

import "modern-normalize/modern-normalize.css";
import "./index.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <UserRoutes />
        </div>
      </main>
    </>
  );
};

export default App;
