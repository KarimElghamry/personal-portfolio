import styles from "./index.module.css";

interface HamburgerIconProps {
  onClick?: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = (
  props: HamburgerIconProps
) => {
  return (
    <div
      className={styles.container}
      onClick={() => (props.onClick ? props.onClick() : undefined)}
    >
      <div className={styles.stripe}></div>
      <div className={styles.stripe}></div>
      <div className={styles.stripe}></div>
    </div>
  );
};

export default HamburgerIcon;
