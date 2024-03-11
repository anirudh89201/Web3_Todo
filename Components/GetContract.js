import React, { useEffect, useState } from "react";
import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import { contractAddress } from "../constants/Address";

export default function GetContract() {
    const { contract } = useContract(contractAddress);
    const { data, isLoading } = useContractRead(contract, "get");
    const [contractData, setContractData] = useState([]);
    const val = false;
    useEffect(() => {
        if (!isLoading) {
            setContractData(data);
        }
    }, [data, isLoading]);
    return (
        <>
            {!isLoading && (
                <ul>
                    {contractData.map((item, index) => (
                     <li key={index}>
                        <div className="flex items-center justify-center gap-5">
                        <span>{item[0]}</span>
                        <span>{item[1].toString()}</span>
                        <Web3Button
                        contractAddress={contractAddress}
                        action={async(contractAddress) => {
                            await contractAddress.call("update",[item[0]])
                        }}
                        >Update</Web3Button>
                        <Web3Button
                        contractAddress={contractAddress}
                        action={async(contractAddress) => {
                            await contractAddress.call("Delete",[item[0]])
                        }}
                        >Delete</Web3Button>
                        </div>
                     </li>
                    ))}
                </ul>
            )}
        </>
   
    )
                    }
                