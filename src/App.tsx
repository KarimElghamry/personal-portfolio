import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SectionHeader from "./components/SectionHeader";
import Skillset from "./components/Skillset";
import { routes } from "./data";

const App: React.FC = () => {
  return (
    <>
      <Header routes={routes} />
      <div style={{ padding: "0 15%" }}>
        <Home />

        <SectionHeader
          route="projects"
          icon="✍️"
          title="Personal Projects"
          linkLabel="View Github"
          url="https://github.com/KarimElghamry"
        />
        <Projects />

        <SectionHeader
          route="skills"
          icon="🤹"
          title="Skillset"
          linkLabel="View Github"
          url="https://github.com/KarimElghamry"
        />
        <Skillset />
      </div>
    </>
  );
};

export default App;
