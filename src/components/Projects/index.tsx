import React from "react";
import { personalProjects } from "../../data/constants";
import SectionHeader from "../SectionHeader";
import Card from "./Card";
import styles from "./index.module.css";

const Projects = () => {
  return (
    <>
      <SectionHeader
        icon="✍️"
        title="Personal Projects"
        linkLabel="View Github"
        url="https://github.com/KarimElghamry"
      />
      <div className={styles.container}>
        {personalProjects.map((val) => (
          <React.Fragment key={val.project.title}>
            <Card {...val}></Card>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Projects;
