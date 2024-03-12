import styles from "./payment.network.module.css"
import List from "../List/List"
import ListItem from "../List/ListItem"
import solanaLogo from "../Icons/Solana_logo.png.webp"
import binanceLogo from "../Icons/binance-icon-2048x2048-eh77cmwj.png"
import colors from "../Const/colors"
import Button from "../Components/Button/Button"
import rightArrow from "../Icons/arrow_right_alt.svg"
import React from "react"
import { useOutletContext } from "react-router-dom"
export default function PaymentNetwork() {
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value] = useOutletContext()
    const chooseNetwork = (id) => {
        const newState = networks.map((obj) => {
            console.log(obj)
            if (obj.id === id) {
                return { ...obj, isActive: true }
            }

            return { ...obj, isActive: false }


        })
        setNetworks(newState)
        const network = networks.find(x=>x.id==id)
        setPayment({ ...payment, toNetwork: network })
    }
    return (<div className={styles.container}>
        <h1 style={colors.default}>Выберите сеть</h1>
        <List>
            {networks?.map((x) =>
                <ListItem isActive={x.isActive} key={x.id} onClick={() => chooseNetwork(x.id)} text={x.name} icon={x.imageUrl} />
            )}

        </List>
        <Button href={`/payment/${payment.id}/currency`} text="Выбрать валюту" icon={rightArrow} style={colors.button}></Button>

    </div>)
}