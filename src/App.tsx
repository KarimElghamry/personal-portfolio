import Header from "./components/Header";
import Home from "./components/Home";
import { routes } from "./data/routes";

const App: React.FC = () => {
  return (
    <>
      <Header routes={routes} />
      <div style={{ padding: "0 20%" }}>
        <Home />
      </div>
    </>
  );
};

export default App;
