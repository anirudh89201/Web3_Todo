'use client'
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";
import { contractAddress } from "../constants/Address";

export const AddTodo = () =>{
    const [Name,setName] = useState('');

    return (
        <>
        <div className="h-screen flex justify-center gap-10 items-center mx-auto">
            <input 
                type="text" 
                onChange={(event)=>setName(event.target.value)} 
                required 
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter todo"
            />
            <Web3Button 
                contractAddress={contractAddress} 
                action={(contractAddress) => contractAddress.call("Add",[Name])}
                className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
                onSuccess={() => {
                    setName('');
                }}
            >
                Add Todo
            </Web3Button>
            </div>
        </>
    );
}
