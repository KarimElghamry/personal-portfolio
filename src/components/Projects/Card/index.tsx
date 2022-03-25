import { openInNewTab } from "../../../helpers";
import Project from "../../../models/Project";
import styles from "./index.module.css";

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div
      className={styles.container}
      onClick={() => openInNewTab(props.project.url)}
    >
      <div className={styles.title}>{props.project.title}</div>
      <div className={styles.link}>View Project &#8594;</div>
      <div className={styles.description}>{props.project.description}</div>

      <img
        src={props.project.image}
        alt="chillify"
        className={styles.preview}
      ></img>
    </div>
  );
};

export default Card;
