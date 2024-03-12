import { BrowserProvider, Contract, ethers } from "ethers"
import React, { useEffect, useState } from "react"
import Button from "../Button/Button"
import colors from "../../Const/colors"
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react"
import getValue from "./getValue"
const USDTAbi = [
    'function transfer(address to, uint amount)',
    'event Transfer(address indexed from, address indexed to, uint amount)'
]
export default function EthPay({ payment }) {
    const { walletProvider } = useWeb3ModalProvider()
    const { isConnected } = useWeb3ModalAccount()


    const [isDisabled, setIsDisabled] = useState(false)
    
   
    const pay = async () => {
        setIsDisabled(true)
        if (!isConnected) throw Error('User disconnected')
        const ethersProvider = new BrowserProvider(walletProvider)
        const signer = await ethersProvider.getSigner()
        const contractAddress = payment.toCurrency.contractAddress
        if (contractAddress != null) {
            const USDTContract = new Contract(contractAddress, USDTAbi, signer)

            try {
                await USDTContract.transfer(payment.walletAddress, getValue(payment.toAmount))
            } catch (e) {
                if (ethers.isError(e, "CALL_EXCEPTION")) {
                    alert("Недостаточно средств");
                }
            }
        }

        try {
            await signer.sendTransaction({
                to: payment.walletAddress,
                value: getValue()
            })
        }
        catch (e) {
            if (ethers.isError(e, "CALL_EXCEPTION")) {
                alert("Недостаточно средств");
            }
        }
        setIsDisabled(false)
    }
    return (
        <React.Fragment>
            {
                isConnected && <React.Fragment>
                  
                    <span>Подключенный кошелёк</span>
                    <w3m-account-button />
                    {
                        !isDisabled &&
                        <Button onClick={() => pay()} style={colors.button} text="Оплатить"></Button>
                    }
                    {isDisabled &&
                        <span>Загружаем платёж...</span>
                    }
                </React.Fragment>
            }
            {!isConnected &&

                <w3m-connect-button size="md" label="Подключить кошелёк" loadingLabel="Подключаемся" />
            }
        </React.Fragment>
    )
}