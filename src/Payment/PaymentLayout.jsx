import React, { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import styles from "./payment.layout.module.css"
import colors from "../Const/colors"
import usePaymentService from "../PaymentService"
import { Label, labelColors } from "../Components/Label/Label"
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react"
import { ethers } from "ethers"
export default function PaymentLayout() {
    const { networks, setNetworks, getCurrencies, getPayment, updatePayment } = usePaymentService()
    const [payment, setPayment] = useState({
        toAmount: 0
    })
    const [value, setValue] = useState(0)
    useEffect(() => {

        if (payment.toAmount != null) {
            setValue(ethers.parseUnits(`${payment.toAmount}`, "ether"))

        }

    }, [payment.toAmount])
    const { id } = useParams()
    useEffect(() => {
        getPayment(id).then(response => setPayment(response.data))
    }, [])
    useEffect(() => {
        if (payment.toNetwork != null) {
            const projectId = '13a04f989ccceb2c3c67f6eba7daa072'
            const mainnet = {
                chainId: payment.toNetwork.chainId,
                name: payment.toNetwork.name,
                currency: "BNB",
                explorerUrl: payment.toNetwork.explorerUrl,
                rpcUrl: payment.toNetwork.url
            }

            // 3. Create modal
            const metadata = {
                name: 'My Website',
                description: 'My Website description',
                url: 'https://mywebsite.com', // origin must match your domain & subdomain
                icons: ['https://avatars.mywebsite.com/']
            }

            createWeb3Modal({
                ethersConfig: defaultConfig({ metadata }),
                chains: [mainnet],
                projectId,
                enableAnalytics: true,
                themeVariables: {
                    '--w3m-color-mix': '#fff'
                }
            })
        }
    }, [payment])

    return (<div className={styles.container}>
        {payment.status != 2 &&

            <React.Fragment>
                <div style={{ display: "flex", gap: 5, alignItems: 'center' }}>
                    <h2 style={colors.white} ><span style={colors.default}>Сумма покупки:</span> {payment?.fromAmount} {payment?.fromCurrency?.name}</h2>

                    <img width={20} height={20} style={{ borderRadius: "50%" }} src={payment.fromCurrency?.imageUrl}></img>
                    {/* <span style={{display:"inline-block",color:"#fff",backgroundColor:"#FCA311",padding:8,borderRadius:24,fontWeight:400}}>Ожидание оплаты</span> */}
                </div>
                {payment.toCurrency &&
                    <div style={{ display: "flex", gap: 5, alignItems: 'center' }}>
                        <h2 style={colors.white}><span style={colors.default}>К оплате:</span> {payment.toAmount} {payment.toCurrency.name} </h2>

                        <img width={20} height={20} style={{ borderRadius: "50%" }} src={payment.toCurrency.imageUrl}></img>
                        {/* <span style={{display:"inline-block",color:"#fff",backgroundColor:"#FCA311",padding:8,borderRadius:24,fontWeight:400}}>Ожидание оплаты</span> */}
                    </div>
                }</React.Fragment>
        }



        <Outlet context={[payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value]}></Outlet>
    </div>)
}