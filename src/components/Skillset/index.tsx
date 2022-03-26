import React from "react";
import { images } from "../../assets";
import SectionHeader from "../SectionHeader";
import styles from "./index.module.css";

const skillCollection = Object.entries(images.frameworks)
  .concat(Object.entries(images.languages))
  .concat(Object.entries(images.utils));

const Skillset: React.FC = () => {
  return (
    <>
      <SectionHeader
        icon="🤹"
        title="Skillset"
        linkLabel="View Github"
        url="https://github.com/KarimElghamry"
      />

      <div className={styles.container}>
        {skillCollection.map((val) => (
          <div className={styles.column} key={val[0]}>
            <img src={val[1]} alt={val[0]}></img>
            <div className={styles.title}>{val[0].toUpperCase()}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skillset;
