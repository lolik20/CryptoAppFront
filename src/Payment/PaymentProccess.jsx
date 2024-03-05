import { Outlet, useOutletContext, useParams } from "react-router-dom"
import styles from "./payment.process.module.css"
import React, { useEffect, useState } from "react"


export default function PaymentProccess() {
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value] = useOutletContext()
    const { id } = useParams()

    useEffect(() => {
        const interval = setInterval(() => {
            getPayment(id).then(response => {

                setPayment(response.data)
            })

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (<div className={styles.container}>
        <h4>Сеть: {payment?.toNetwork?.name}</h4>

        <h5>Адрес получателя: {payment?.walletAddress}</h5>

        {/* <div style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", gap: 20 }}>

            {
                isConnected && <React.Fragment>
                    {
                        isDisabled &&
                        <Button onClick={() => pay()} style={colors.button} text="Оплатить"></Button>
                    }
                    {!isDisabled &&
                        <span>Загружаем платёж...</span>
                    }
                    <span>Подключенный кошелёк</span>
                    <w3m-account-button/>
                </React.Fragment>
            }
            {!isConnected &&
                <React.Fragment>

                    <w3m-connect-button label="Подключить кошелёк" loadingLabel="Подключаемся"></w3m-connect-button>
                    <span>или</span>
                </React.Fragment>
            }

           
        </div> */}
        <Outlet context={[payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value]}></Outlet>
        {/* <h5 style={{marginTop:150}}>Не хватает {payment.toCurrency?.name} на балансе?</h5>
        <button>Купить</button> */}
    </div>)
}