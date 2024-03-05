import axios from "axios"
import { useEffect, useState } from "react";
const host = "http://194.147.115.174:5226";
export default function usePaymentService() {
    const [networks, setNetworks] = useState([])
    useEffect(() => {
        getNetworks().then(promise => setNetworks(promise.data))
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

    return { networks, setNetworks, getCurrencies, getPayment, updatePayment }
}