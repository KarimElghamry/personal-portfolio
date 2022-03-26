import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import { routes } from "./data/constants";

const App: React.FC = () => {
  return (
    <>
      <Header routes={routes} />
      <div style={{ padding: "0 15%" }}>
        <Home />
        <Projects />
        <Skillset />
      </div>
    </>
  );
};

export default App;
