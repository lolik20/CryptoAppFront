import styles from "./list.item.module.css"

export default function ListItem({ icon, text, onClick, isActive }) {
    return (
        <div className={styles.container} style={{ backgroundColor: isActive ? "#FCA311" : "#333333" }} onClick={onClick}>
            {icon && <img src={icon} className={styles.icon} width={30} height={30}></img>}
            <span className={styles.text}>{text}</span>
            <span  className={styles.text}style={{marginLeft:"auto"}}>≈334$</span>
        </div>)
}