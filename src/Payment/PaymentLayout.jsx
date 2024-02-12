import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import styles from "./payment.layout.module.css"
import colors from "../Const/colors"
import usePaymentService from "../PaymentService"
export default function PaymentLayout() {
    const { networks, setNetworks, currencies, setCurrencies, getPayment } = usePaymentService()
    const [payment, setPayment] = useState({
        toAmount: 0
    })
    const { id } = useParams()
    useEffect(() => {
        getPayment(id).then(response => setPayment(response.data))
    }, [window.location.href])
    return (<div className={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 style={colors.white}><span style={colors.default}>К оплате:</span> {payment?.toAmount}$</h1>
            {/* <span style={{display:"inline-block",color:"#fff",backgroundColor:"#FCA311",padding:8,borderRadius:24,fontWeight:400}}>Ожидание оплаты</span> */}
        </div>


        <Outlet context={[payment, networks, setNetworks, currencies, setCurrencies]}></Outlet>
    </div>)
}