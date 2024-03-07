import styles from "./payment.currency.module.css"
import List from "../List/List"
import ListItem from "../List/ListItem"
import solanaLogo from "../Icons/Solana_logo.png.webp"
import binanceLogo from "../Icons/binance-icon-2048x2048-eh77cmwj.png"
import colors from "../Const/colors"
import Button from "../Components/Button/Button"
import rightArrow from "../Icons/arrow_right_alt.svg"
import React, { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
export default function PaymentCurrency() {
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value] = useOutletContext()
    const [currencies,setCurrencies]= useState([])
    useEffect(()=>{
        getCurrencies().then(x=>setCurrencies(x.data))
    },[])
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
        setPayment({...payment,toCurrency:currency,toAmount:(payment.fromAmount * currency.rate).toFixed(2)})
    }
    return (<div className={styles.container}>
        <h1 style={colors.default}>Выберите валюту</h1>
        <List>
            {currencies?.filter(x=>x.type!=2).map((x) =>
                <ListItem amount={ (payment.fromAmount * x.rate).toFixed(2)} isActive={x.isActive} key={x.id} onClick={() => chooseCurrency(x.id)} text={x.name} icon={x.imageUrl} />
            )}  

        </List>
        
        <Button text="Оплатить" onClick={()=>updatePayment(payment.id,payment.toNetwork.id,payment.toCurrency.id).then(x=> window.location.href=`/payment/${payment.id}/process`)} icon={rightArrow} style={colors.button}></Button>
    </div>)
}