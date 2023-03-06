// src/pages/index.tsx
import type { NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link"

import CreateEvent from "../../components/CreateEvent"
import CreateBurnTicket from "../../components/BurnTicket"
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import { Text, Button,Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
const addressContract='0x5fbdb2315678afecb367f032d93f642f64180aa3'

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Provider</title>
      </Head>

      <Heading as="h3"  my={4}>Ticket Sale</Heading>   
      <Tabs size='md' variant='enclosed'>
  <TabList>
    
    <Tab>Tạo sự kiện</Tab>
    
    <Tab>Check in</Tab>
   
  </TabList>
  <TabPanels>
    
    <TabPanel>
    <CreateEvent addressContract={addressContract} />
    </TabPanel>
    <TabPanel>
    <CreateBurnTicket addressContract={addressContract} />
    </TabPanel>
    
  </TabPanels>
</Tabs>
      
    </>
  )
}

export default Admin