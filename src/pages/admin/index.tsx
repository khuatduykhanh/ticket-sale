// src/pages/index.tsx
import type { NextPage } from "next"
import Head from "next/head"
import NextLink from "next/link"

import CreateCompany from "../../components/CreateCompany"
import SetAddressToken from "../../components/SetAdressToken"
import { VStack, Heading, Box, LinkOverlay, LinkBox} from "@chakra-ui/layout"
import { Text, Button,Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
const addressContract='0x5fbdb2315678afecb367f032d93f642f64180aa3'

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>

      <Heading as="h3"  my={4}>Ticket Sale</Heading>   
      <Tabs size='md' variant='enclosed'>
  <TabList>
    
    <Tab>Admin</Tab>
    
    <Tab>SetAddressToken</Tab>
   
  </TabList>
  <TabPanels>
    
    <TabPanel>
    <CreateCompany addressContract={addressContract} />
    </TabPanel>
    <TabPanel>
    <SetAddressToken addressContract={addressContract} />
    </TabPanel>
    
  </TabPanels>
</Tabs>
      
    </>
  )
}

export default Admin