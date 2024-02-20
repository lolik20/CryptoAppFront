import axios from "axios"
import { useEffect, useState } from "react";
const host = "http://localhost:5226";
export default function usePaymentService() {
    const [networks, setNetworks] = useState([])
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        getNetworks().then(promise => setNetworks(promise.data))
        getCurrencies().then(promise => setCurrencies(promise.data))
    }, [])
    const getPayment = async (paymentId) => {
        return axios.get(`${host}/api/payment/${paymentId}`)
    }
    const getNetworks = async () => {
        return axios.get(`${host}/api/network/all`)
    }
    const getCurrencies = async () => {
        return axios.get(`${host}/api/currency/all`)
    }
    const updatePayment = async (paymentId, networkId, currencyId) => {
        const body = {
            networkId: networkId,
            currencyId: currencyId,
            id:paymentId
        }
        return axios.put(`${host}/api/payment`, body)
    }

    return { networks, setNetworks, currencies, setCurrencies, getPayment, updatePayment }
}