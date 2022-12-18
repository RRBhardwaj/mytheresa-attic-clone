import React from 'react';
import { Box, Button, Text,Image,Grid, Flex, Spacer, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "../Pages/mens.module.css";
import Footer from '../Components/Footer';

const getCartitem = () => {
    return axios.get(`http://localhost:5000/cart`);
}
const deleteCartItem = (id) => {
    return axios.delete(`http://localhost:5000/cart/${id}`);
};

const CartPage = () => {
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [price,setPrice] = useState(0);

    useEffect(()=>{
        handleGetItem();
    },[total])

    const handleGetItem = () =>{
        getCartitem().then((res)=>{
            console.log(res.data);
            setCart(res.data);
            setTotal(res.data.length);
        });
    }

    const handleDelete = (id) => {
        deleteCartItem(id);
        handleGetItem();
    } 
  return (
    <Box>
        <Box marginTop="20px" marginBottom="20px" className={styles.products}>
           <Flex>
           <Spacer/>
            <Heading as="h6">Total Count: {total}</Heading>
            <Spacer/>
           </Flex>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.products}>
      {
        cart?.map((el)=>(
          <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={el.image} alt={el.title}/>
            <Text>{el.name}</Text>
            <Text>{el.type}</Text>
            <Text>{el.price}</Text>
            <Text>{el.originalprice}</Text>
            <Button colorScheme='teal' size='xs'marginBottom="8px" onClick={()=>handleDelete(el.id)}>Delete</Button>
          </Box>
        ))
      }
      </Grid>
      <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default CartPage