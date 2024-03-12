import axios from "axios"
import { useEffect, useState } from "react";
const host = "https://localhost:5226";
export default function usePaymentService() {
    const [networks, setNetworks] = useState([])
    useEffect(() => {
        getNetworks().then(promise => setNetworks(promise.data))
    }, [])
    const getPayment = async (paymentId) => {
        return axios.get(`${host}/api/v1/payment/${paymentId}`)
    }
    const getNetworks = async () => {
        return axios.get(`${host}/api/v1/network/all`)
    }
    const getCurrencies = async () => {
        return axios.get(`${host}/api/v1/currency/all`)
    }
    const updatePayment = async (paymentId, networkId, currencyId) => {
        const body = {
            networkId: networkId,
            currencyId: currencyId,
            id:paymentId
        }
        return axios.put(`${host}/api/v1/payment`, body)
    }

    return { networks, setNetworks, getCurrencies, getPayment, updatePayment }
}