import QRCode from "react-qr-code";
import { useOutletContext } from "react-router-dom";

export default function TrustWallet(){
    const [payment, networks, setNetworks, getCurrencies, updatePayment, setPayment, getPayment, value] = useOutletContext()

    return(
        <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "30%", width: "100%" }}
        value={payment?.walletAddress}
        // value={`ethereum:${payment?.toCurrency?.contractAddress}/transfer?address=${payment?.walletAddress}&uint256=${value}`}
        viewBox={`0 0 256 256`}
    />
    )
}