import Header from "./components/Header";
import Home from "./components/Home";
import SectionHeader from "./components/SectionHeader";
import { routes } from "./data/routes";

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
      </div>
    </>
  );
};

export default App;
