import styles from "./label.module.css"
export const labelColors = {
    successful: {
        color: "#000",
        backgoundColor: "#00FF00"
    },
    inProgress: {
        color:"#fff",
        backgoundColor:"#FCA311"
    }
}
export function Label({ text, color }) {
    return (<span style={color}>{text}</span>)
}