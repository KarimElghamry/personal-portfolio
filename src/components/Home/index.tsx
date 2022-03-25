import { images } from "../../assets";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* intro section */}
      <div className={styles.column}>
        <h1>👋</h1>
        <h1>Hello, I am Karim Elghamry</h1>
        <p>
          I am a software engineer with 6+ years of experience, focusing on{" "}
          <strong>web development</strong>, <strong>machine learning</strong>{" "}
          and <strong>blockchain</strong>. I am also a PC gamer and a problem
          solver.
        </p>
      </div>

      {/* personal photo */}
      <div className={styles.column}>
        <img
          src={images.personalImage}
          alt="personal"
          className={styles["personal-photo"]}
        ></img>
      </div>
    </div>
  );
};

export default Home;
