import { useOutlet, useOutletContext, useParams } from "react-router-dom"
import styles from "./payment.process.module.css"
import QRCode from "react-qr-code"
import { useEffect } from "react"
export default function PaymentProccess() {
    const [payment, networks, setNetworks, currencies, setCurrencies, updatePayment, setPayment, getPayment] = useOutletContext()
    const { id } = useParams()
    useEffect(() => {
        const interval = setInterval(() => {
            getPayment(id).then(response => {
                
                setPayment(response.data)
            })

        }, 8000);

        return () => clearInterval(interval);
    }, []);
    return (<div className={styles.container}>
        <h4>Сеть: {payment?.toNetwork?.name}</h4>

        <h5>Адрес: {payment?.walletAddress}</h5>
        <span>Другие способы оплаты</span>

        {/* <QRCode
            size={128}
            bgColor="#333"
            fgColor="#FCA311"
            style={{ height: "auto", maxWidth: "45%", width: "100%",borderRadius:20 }}
            value="0xc625F526Ba3301993f7E3aA51b05A03533f39923"
            viewBox={`0 0 128 128`}
        /> */}
    </div>)
}