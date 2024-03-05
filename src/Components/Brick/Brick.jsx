import { Link } from "react-router-dom"
import styles from "./brick.module.css"

export default function Brick({ logo, to, title, onClick }) {
    return (
        <Link to={to} className={styles.container} onClick={onClick} >
            <img src={logo} className={styles.logo}>
            </img>
            <span className={styles.title}>{title}</span>
        </Link >
    )
}