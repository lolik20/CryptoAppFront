import { Link } from "react-router-dom"
import List from "../../List/List"
import styles from "./button.module.css"
export default function Button({ text, style, icon, onClick, href }) {

    return (<Link to={href} style={style} className={styles.container}>
        <span className={styles.text}>{text}</span>
        {icon &&
            <img src={icon} height={30}></img>

        }
    </Link>)
}