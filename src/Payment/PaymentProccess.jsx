import { useOutletContext, useParams } from "react-router-dom"
import styles from "./payment.process.module.css"
import React, { useEffect, useState } from "react"
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'
import { BrowserProvider, Contract, ethers } from "ethers"
import Button from "../Components/Button/Button"
import colors from "../Const/colors"
import QRCode from "react-qr-code"
const USDTAbi = [
    'function transfer(address to, uint amount)',
    'event Transfer(address indexed from, address indexed to, uint amount)'
]

export default function PaymentProccess() {
    const [payment, networks, setNetworks, currencies, setCurrencies, updatePayment, setPayment, getPayment] = useOutletContext()
    const { id } = useParams()
    const { isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const [isDisabled, setIsDisabled] = useState(true)
    const [isPos, setPos] = useState(false)
    const pay = async () => {
        setIsDisabled(false)
        if (!isConnected) throw Error('User disconnected')
        const ethersProvider = new BrowserProvider(walletProvider)
        const signer = await ethersProvider.getSigner()
        const value = ethers.parseUnits(`${payment.toAmount}`, "ether")
        const contractAddress = payment.toCurrency.contractAddress
        if (contractAddress != null) {
            const USDTContract = new Contract(contractAddress, USDTAbi, signer)

            try {
                await USDTContract.transfer(payment.walletAddress, value)
            } catch (e) {
                if (ethers.isError(e, "CALL_EXCEPTION")) {
                    console.log("Недостаточно средств");
                }
            }
        }

        try {
            await signer.sendTransaction({
                to: payment.walletAddress,
                value: value
            })
        }
        catch (e) {
            if (ethers.isError(e, "CALL_EXCEPTION")) {
                console.log("Недостаточно средств");
            }
        }
        setIsDisabled(true)
    }
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
        
        {/* <h5>Скопировать адрес</h5> */}
    
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", gap: 20 }}>
            {
                payment.walletAddress &&
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "30%", width: "100%" }}
                    value={payment.walletAddress}
                    viewBox={`0 0 256 256`}
                />
            }

            {!isConnected &&
            <React.Fragment>
                <span>или</span>
                <w3m-connect-button label="Подключить кошелёк" loadingLabel="Подключаемся"></w3m-connect-button>

            </React.Fragment>
            }
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
                    <w3m-account-button balance="hide" />

                </React.Fragment>
            }
        </div>

        {/* <h5 style={{marginTop:150}}>Не хватает {payment.toCurrency?.name} на балансе?</h5>
        <button>Купить</button> */}
    </div>)
}