import styles from "./payment.successful.module.css"
import success from "../Icons/success.svg"
import Button from "../Components/Button/Button"
import colors from "../Const/colors"
import { useOutletContext } from "react-router-dom"
export default function PaymentSuccessful() {
    const [payment] = useOutletContext()
    return (
        <div className={styles.container}>
            <div className={styles.successBlock}>
                <img src={success} width={130} height={130} />
                <span className={styles.successText}>Успешно оплачено</span>
                <span className={styles.successAmount}>{payment?.fromAmount}<img src={payment.fromCurrency.imageUrl}></img></span>


                <Button style={colors.button} text="Вернуться в магазин"></Button>
            </div>

        </div>
    )
}