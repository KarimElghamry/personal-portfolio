import { useCallback } from "react";
import { openInNewTab } from "../../helpers";
import styles from "./index.module.css";

interface SectionHeaderProps {
  icon: string;
  title: string;
  linkLabel: string;
  url: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = (
  props: SectionHeaderProps
) => {
  const handleClick = useCallback(() => openInNewTab(props.url), [props.url]);

  return (
    <div className={styles.container}>
      <span className="flex-row">
        <span className={styles.icon}>{props.icon}</span>
        <span className={styles.title}>{props.title}</span>
      </span>

      <span onClick={() => handleClick()} className={styles.link}>
        {props.linkLabel} &#8594;
      </span>
    </div>
  );
};

export default SectionHeader;
