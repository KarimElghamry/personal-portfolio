import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SectionHeader from "./components/SectionHeader";
import Skillset from "./components/Skillset";
import Work from "./components/Work";
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

        <SectionHeader
          route="work"
          icon="👨‍💻‍"
          title="Work Experience"
          linkLabel="View Github"
          url="https://github.com/KarimElghamry"
        />
        <Work />
      </div>

      <Contact />
    </>
  );
};

export default App;
