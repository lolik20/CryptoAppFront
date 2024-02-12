import styles from "./list.module.css"
export default function List({ children }) {
    return (<div className={styles.container}>
        {children}
    </div>)
}