import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import { parseEther }from "@ethersproject/units"
import {  Input , NumberInput,  NumberInputField,  FormControl,  FormLabel, Button } from '@chakra-ui/react'
import  Ticket  from "../config/ticket.json"
interface Props {
    addressContract: string
}

const CreateReSaleTicket =  (props:Props) => {
  
    const addressContract = props.addressContract;
    const [ticketId, setTicketId] = useState<string| undefined>(undefined)
    const [price, setPrice] = useState<string| undefined>(undefined)
    const [timeStart, setTimeStart] = useState<string| undefined>(undefined)
    const [timeEnd, setTimeEnd] = useState<string| undefined>(undefined)
   
    const { account, active, library} = useWeb3React<Web3Provider>()
    async function creatEventSaleTicket(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        const ticket = new Contract(addressContract, Ticket.abi , library.getSigner());
        await ticket.reSaleTicket(ticketId,price,getTimestamp(timeStart),getTimestamp(timeEnd)).catch('error', console.error)
      }
      const ticketid = (value:string) => setTicketId(value)
      const Price = (value:string) => setPrice(value)
      function getTimestamp(date:any)
      {
        var tp = Math.round(Date.parse(date) / 1000);
        return tp;
      }
      
      return (
        <div>
            <form onSubmit={creatEventSaleTicket}>
              <FormControl>
                <FormLabel htmlFor='ticketid'>Nhập ID của vé </FormLabel>
                <NumberInput id="ticketid" onChange={ticketid} my={3}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='price'>Nhập Giá Vé </FormLabel>
                <NumberInput id="price" onChange={Price} my={3}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor="party">Nhập ngày giờ bắt đầu bán</FormLabel>
                <Input id="time1" type="datetime-local" name="partydate1" onChange={(e) => setTimeStart(e.target.value)} my={3} />
                
                <FormLabel htmlFor="party">Nhập ngày giờ kết thúc bán</FormLabel>
                <Input id="time2" type="datetime-local" name="partydate2" onChange={(e) => setTimeEnd(e.target.value)} my={3}/>
                <Button type="submit" isDisabled={!account} my={3}>Transfer</Button>
              </FormControl>
            </form>
        </div>
      )
}
export default CreateReSaleTicket
