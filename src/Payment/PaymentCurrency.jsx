import styles from "./payment.currency.module.css"
import List from "../List/List"
import ListItem from "../List/ListItem"
import solanaLogo from "../Icons/Solana_logo.png.webp"
import binanceLogo from "../Icons/binance-icon-2048x2048-eh77cmwj.png"
import colors from "../Const/colors"
import Button from "../Components/Button/Button"
import rightArrow from "../Icons/arrow_right_alt.svg"
import React from "react"
import { useOutletContext } from "react-router-dom"
export default function PaymentCurrency() {
    const [payment, networks, setNetworks, currencies, setCurrencies, updatePayment,setPayment] = useOutletContext()
    const chooseCurrency = (id) => {
        const newState = currencies.map(obj => {

            if (obj.id === id) {
                return { ...obj, isActive: true }
            }
            else {
                return { ...obj, isActive: false }
            }
        })
        setCurrencies(newState)
        const currency = currencies.find(x=>x.id==id)
        setPayment({...payment,toCurrency:currency})
    }
    return (<div className={styles.container}>
        <h1 style={colors.default}>Выберите валюту</h1>
        <List>
            {currencies?.filter(x=>x.type!=2).map((x) =>
                <ListItem amount="300$" isActive={x.isActive} key={x.id} onClick={() => chooseCurrency(x.id)} text={x.name} icon={x.imageUrl} />
            )}

        </List>
        <Button text="Оплатить" onClick={()=>updatePayment(payment.id,payment.toNetwork.id,payment.toCurrency.id)} icon={rightArrow} href={`/payment/${payment.id}/process`} style={colors.button}></Button>
    </div>)
}