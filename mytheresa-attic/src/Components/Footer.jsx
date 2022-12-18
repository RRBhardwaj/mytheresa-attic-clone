import React from 'react';
import {Grid, GridItem,Text,Flex,Box, Input,Button,Image, Spacer} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import image from "../Photos/footerpic.jpg";
import image1 from "../Photos/fottersecondpic.jpg";
import dhl from "../Photos/DHL.jpg";

const Footer = () => {
    const [email,setEmail] = React.useState("");
    const handleChange = (e) => {
        if(!email){
            alert("Put Correct Email Address")
        }
        if(email){
            alert("Succesfully Registered Email");
        }
    }
  return (
    <Box>
        <Grid templateColumns='repeat(6, 1fr)' h='200px' templateRows='repeat(2, 1fr)' gap={6} width="80%" marginLeft="150px" marginRight="150px" marginBottom="30px">
            <GridItem rowSpan={2} colSpan={2} bg='white' textAlign="left">
                <Text>SERVICE & SECURITY</Text>
                <Flex marginTop="5px">
                    <CheckIcon boxSize={3} marginTop="8px"/><Text fontSize='md'>Fast Delivery</Text>
                </Flex>
                <Text fontSize='xs' marginLeft="15px">Delivery withing 2 business days</Text>
                <Flex marginTop="5px">
                    <CheckIcon boxSize={3} marginTop="8px"/><Text fontSize='md'>Free returns within 30 days</Text>
                </Flex>
                <Text fontSize='xs' marginLeft="15px">Delivery withing 2 business days</Text>
                <Flex marginTop="5px">
                    <CheckIcon boxSize={3} marginTop="8px"/><Text fontSize='md'>Secure payment and data protection</Text>
                </Flex>
                <Text fontSize='xs' marginLeft="15px">SSL encryption for secure transactions and personal data</Text>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg='white' textAlign="left">
                <Text>MYTHERESA</Text>
                <Text fontSize='xs' marginTop="8px">About Us</Text>
                <Text fontSize='xs'>Trust & services</Text>
                <Text fontSize='xs'>Sustainability</Text>
                <Text fontSize='xs'>Press</Text>
                <Text fontSize='xs'>Careers</Text>
                <Text fontSize='xs'>Investor Relations</Text>
                <Text fontSize='xs'>Affiliates</Text>
                <Text fontSize='xs'>Tax-Free Shopping</Text>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg='white' textAlign="left">
                <Text>CUSTOMER CARE</Text>
                <Text fontSize='xs' marginTop="8px">Contact us</Text>
                <Text fontSize='xs'>Shipping Information</Text>
                <Text fontSize='xs'>Secure Payment</Text>
                <Text fontSize='xs'>Exchnages</Text>
                <Text fontSize='xs'>Returns</Text>
                <Text fontSize='xs'>After sale service</Text>
                <Text fontSize='xs'>Gift card</Text>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg='white' textAlign="left">
                <Text>GET TREND UPDATES, STYLE TIPS AND MORE</Text>
                <Flex marginTop="8px">
                <Input placeholder='Email' type="email" width="70%" marginLeft="3px" variant='filled' onChange={(e)=>{setEmail(e.target.value)}}/><Button marginLeft="5px" onClick={()=>handleChange()}>Subscribe</Button>
                </Flex>
                <Text fontSize="xs" marginTop="9px">Receive personal notifications</Text>
                <Text fontSize='xs' marginTop="10px">Follow us on</Text>
                <Image src={image} alt="footer"/>
            </GridItem>
        </Grid>
        <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
        </Box>
        <Flex marginLeft="150px" marginRight="150px" marginBottom="30px">
            <Text fontSize='xs' marginTop="5px">Payment Method:</Text>
            <Image height="25px" src={image1} alt="footersecondpic"/>
            <Spacer/>
            <Text fontSize='xs' marginTop="5px">delivered by:</Text>
            <Image src={dhl} alt="delivery image"/>
          
        </Flex>
    </Box>
    
  )
}

export default Footer