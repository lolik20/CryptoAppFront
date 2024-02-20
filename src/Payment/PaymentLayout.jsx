import React, { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import styles from "./payment.layout.module.css"
import colors from "../Const/colors"
import usePaymentService from "../PaymentService"
import { Label, labelColors } from "../Components/Label/Label"
export default function PaymentLayout() {
    const { networks, setNetworks, currencies, setCurrencies, getPayment, updatePayment } = usePaymentService()
    const [payment, setPayment] = useState({
        toAmount: 0
    })
    const { id } = useParams()
    useEffect(() => {
        getPayment(id).then(response => setPayment(response.data))
    }, [])
    // useEffect(() => {
    //     if (payment.status == 2 && !window.location.href.includes("success")) {
    //         window.location.href = `/payment/${payment.id}/success`
    //     }
    // }, [payment?.status])
    return (<div className={styles.container}>
        {payment.status != 2 &&

            <React.Fragment>
                <div style={{ display: "flex", gap: 5, alignItems: 'center' }}>
                    <h2 style={colors.white} ><span style={colors.default}>Сумма:</span> {payment?.fromAmount} {payment?.fromCurrency?.name}</h2>

                    <img width={20} height={20} style={{ borderRadius: "50%" }} src={payment.fromCurrency?.imageUrl}></img>
                    {/* <span style={{display:"inline-block",color:"#fff",backgroundColor:"#FCA311",padding:8,borderRadius:24,fontWeight:400}}>Ожидание оплаты</span> */}
                </div>
                {payment.toCurrency &&
                    <div style={{ display: "flex", gap: 5, alignItems: 'center' }}>
                        <h2 style={colors.white}><span style={colors.default}>К оплате:</span> {payment.toAmount} {payment.toCurrency.name}</h2>

                        <img width={20} height={20} style={{ borderRadius: "50%" }} src={payment.toCurrency.imageUrl}></img>
                        {/* <span style={{display:"inline-block",color:"#fff",backgroundColor:"#FCA311",padding:8,borderRadius:24,fontWeight:400}}>Ожидание оплаты</span> */}
                    </div>
                }</React.Fragment>
        }



        <Outlet context={[payment, networks, setNetworks, currencies, setCurrencies, updatePayment, setPayment, getPayment]}></Outlet>
    </div>)
}