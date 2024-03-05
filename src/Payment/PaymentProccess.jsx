import { Outlet, useOutletContext, useParams } from "react-router-dom"
import styles from "./payment.process.module.css"
import React, { useEffect, useState } from "react"
import Brick from "../Components/Brick/Brick"
import metamaskIcon from "../Icons/MetaMask_Fox.svg.png"
import trustWallet from "../Icons/trust-wallet-logo.png"
import bybitlogo from "../Icons/bybitLogo.png"
import binanceLogo from "../Icons/binance-icon-2048x2048-eh77cmwj.png"
import { useWeb3ModalProvider } from "@web3modal/ethers/react"
export default function PaymentProccess() {
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment] = useOutletContext()
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
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", gap: 20 }}>
            <span>Способ оплаты</span>
            <div className={styles.bricks}>
                <Brick to={`/payment/${payment.id}/process/metamask`} logo={metamaskIcon} title="Metamask" > </Brick>
                <Brick to={`/payment/${payment.id}/process/trustwallet`} logo={trustWallet} title="TrustWallet"></Brick>
                <Brick logo={bybitlogo} title="ByBit" ></Brick>
                <Brick logo={binanceLogo} title="Binance"></Brick>
            </div>
        </div>
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
        <Outlet context={[payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment]}></Outlet>
        {/* <h5 style={{marginTop:150}}>Не хватает {payment.toCurrency?.name} на балансе?</h5>
        <button>Купить</button> */}
    </div>)
}