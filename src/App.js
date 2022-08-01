import Header from "./modules/Header";
import Section from "./shared/components/Section";
import Contaiter from "./shared/components/Contaiter";
import UserRoutes from "./UserRoutes";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Contaiter>
            <UserRoutes />
          </Contaiter>
        </Section>
      </main>
    </>
  );
};

export default App;
