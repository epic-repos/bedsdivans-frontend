import ScaleIcon from "icons/scale";
import styles from "styles/NewProductPage.module.scss";

interface TabButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  isactive?: boolean;
}
const SideTabButton = (props: TabButtonProps) => {
  const styleActive = {
    background: props.isactive ? "#fff" : "#0e3f70",
  };
  const color = props.isactive ? "#000" : "#fff";
  return (
    <div style={styleActive} className={styles.imageicon} {...props}>
      <ScaleIcon fill={color} />
      <span style={{ color: color }}>{props.title}</span>
    </div>
  );
};
export default SideTabButton;
