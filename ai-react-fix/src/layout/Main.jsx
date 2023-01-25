import styles from "layout/layout.module.css";

export default function Main({children}) {
    return (
        <div id={styles["main"]}>
            {children}
        </div>
    );
}