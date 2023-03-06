import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import {  Input , NumberInput,  NumberInputField,  FormControl,  FormLabel, Button } from '@chakra-ui/react'
import  Ticket  from "../config/ticket.json"
interface Props {
    addressContract: string
}

const SetAddressToken =  (props:Props) => {
    const addressContract = props.addressContract;
    const [addressToken, setAddressToken] = useState<string| undefined>(undefined)
   
    const { account, active, library} = useWeb3React<Web3Provider>()
    async function createBuyTicket(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        // const ticket = new Contract(addressContract, ticketabi , library.getSigner());
        const ticket = new Contract(addressContract, Ticket.abi, library.getSigner());
        const setaddresstoken = await ticket.setAddressToken (addressToken).catch('error', console.error)
        await setaddresstoken.wait() 
      }

      return (
        <div>
            <form onSubmit={createBuyTicket}>
              <FormControl>
                
              <FormLabel htmlFor='addressCompany'>Nhập địa chỉ của Token: </FormLabel>
                <Input id="addressCompany" type="text" required  onChange={(e) => setAddressToken(e.target.value)} my={3}/>
                <Button type="submit" isDisabled={!account}>Transfer</Button>
              </FormControl>
            </form>
        </div>
      )
}
export default SetAddressToken
