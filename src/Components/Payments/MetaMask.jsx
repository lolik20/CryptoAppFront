import React from "react"
import QRCode from "react-qr-code"
import { useOutletContext } from "react-router-dom"
import styles from "./payments.module.css"

export default function Metamask() {
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value] = useOutletContext()

    return (
        <div className={styles.container}>
            <span>или</span>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "50%", width: "100%" }}
                value={`ethereum:${payment?.toCurrency?.contractAddress}/transfer?address=${payment?.walletAddress}&uint256=${value}`}
                viewBox={`0 0 256 256`}
            />
            <span>Отсканируйте QR код в приложении для оплаты</span>
        </div>

    )
}