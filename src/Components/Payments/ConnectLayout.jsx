import { useWeb3ModalProvider } from "@web3modal/ethers/react"
import { BrowserProvider, Contract, ethers } from "ethers"
import React, { useState } from "react"
import { Outlet, useOutletContext } from "react-router-dom"
import styles from "./connect.layout.module.css"
import Button from "../Button/Button"
import colors from "../../Const/colors"
import Brick from "../Brick/Brick"

import metamaskIcon from "../../Icons/MetaMask_Fox.svg.png"
import trustWallet from "../../Icons/trust-wallet-logo.png"
import bybitlogo from "../../Icons/bybitLogo.png"
import binanceLogo from "../../Icons/binance-icon-2048x2048-eh77cmwj.png"

const USDTAbi = [
    'function transfer(address to, uint amount)',
    'event Transfer(address indexed from, address indexed to, uint amount)'
]
export default function ConnectLayout() {
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value] = useOutletContext()
    const [selected, setSelected] = useState("")
    const { isConnected } = useWeb3ModalProvider()
    const { walletProvider } = useWeb3ModalProvider()
    const [isDisabled, setIsDisabled] = useState(true)

    const pay = async () => {
        setIsDisabled(false)
        if (!isConnected) throw Error('User disconnected')
        const ethersProvider = new BrowserProvider(walletProvider)
        const signer = await ethersProvider.getSigner()
        const contractAddress = payment.toCurrency.contractAddress
        if (contractAddress != null) {
            const USDTContract = new Contract(contractAddress, USDTAbi, signer)

            try {
                await USDTContract.transfer(payment.walletAddress, value)
            } catch (e) {
                if (ethers.isError(e, "CALL_EXCEPTION")) {
                    alert("Недостаточно средств");
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
                alert("Недостаточно средств");
            }
        }
        setIsDisabled(true)
    }
    return (<div className={styles.container}>

        <div style={{ textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", gap: 20 }}>
            <span>Способ оплаты</span>
            <div className={styles.bricks}>
                <Brick to={`/payment/${payment.id}/process/wallet/metamask`} logo={metamaskIcon} title="Metamask" onClick={() => setSelected("Metamask")}> </Brick>
                <Brick to={`/payment/${payment.id}/process/wallet/trustwallet`} logo={trustWallet} title="TrustWallet" onClick={() => setSelected("TrustWallet")}></Brick>
                <Brick logo={bybitlogo} title="ByBit" onClick={() => setSelected("ByBit")}></Brick>
                <Brick logo={binanceLogo} title="Binance" onClick={() => setSelected("Binance")}></Brick>
            </div>

            {selected.length > 0 &&

                <React.Fragment>
                    <h2 >{selected}</h2>
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
                            <w3m-account-button />
                        </React.Fragment>
                    }
                    {!isConnected &&
                        <React.Fragment>

                            <w3m-connect-button label="Подключить кошелёк" loadingLabel="Подключаемся"></w3m-connect-button>
                        </React.Fragment>
                    }
                </React.Fragment>
            }

            <Outlet context={[payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value]}></Outlet>

        </div>

    </div>)

}