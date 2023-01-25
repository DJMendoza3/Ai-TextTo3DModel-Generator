import styles from "./components.module.css";

export default function ToggleButton({
    icon,
    clickHandler,
}) {
    return (
            <button onClick={clickHandler} className={styles.toggle_btn}>
                <p>test</p>
                <img src={icon} alt="" />
            </button>
    );
}