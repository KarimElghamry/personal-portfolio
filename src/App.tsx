import Header from "./components/Header";
import { routes } from "./data/routes";

const App: React.FC = () => {
  return (
    <>
      <Header routes={routes}></Header>
    </>
  );
};

export default App;
