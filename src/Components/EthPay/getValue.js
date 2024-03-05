import { ethers } from "ethers";


export default function getValue (eth){
    return ethers.parseUnits(`${eth}`, "ether");
}