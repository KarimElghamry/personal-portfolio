import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SectionHeader from "./components/SectionHeader";
import { routes } from "./data/constants";

const App: React.FC = () => {
  return (
    <>
      <Header routes={routes} />
      <div style={{ padding: "0 15%" }}>
        <Home />
        <SectionHeader
          icon="✍️"
          title="Personal Projects"
          linkLabel="View Github"
          url="https://github.com/KarimElghamry"
        />
        <Projects />
      </div>
    </>
  );
};

export default App;
