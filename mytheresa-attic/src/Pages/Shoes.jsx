import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {Box,Text,Image,Button,Grid,Flex,Spacer} from "@chakra-ui/react";
import styles from "./mens.module.css";
import Footer from '../Components/Footer';
import { useContext } from 'react';
import { CartItem } from '../Context/CartItem';

const getMensData = (page,sort,name) => {
  return axios.get(`http://localhost:5000/shoes?_page=${page}&_limit=12&_sort=${name}&_order=${sort}`);
}


const Shoes = () => {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);
  const [sort,setSort] = useState("desc")
  const [name,setName] = useState("title")
  const {handleCart} = useContext(CartItem);

  useEffect(()=>{
    getMensData(page,sort,name)
    .then((res)=>{
      // console.log(res);
      setData(res.data);
    })
  },[page,sort,name])
  console.log(data);

  const handleChange = (value) => {
    setPage(value+page);
  }
  const handleSort = (value) =>{
    setSort(value);
    // console.log("asc");
  }
  const handleName = (value) => {
    setName(value)
  }
  const handleCartItem = (el) => {
    handleCart(el);
  }
  return (
    <Box>
      <Flex marginBottom="20px">
        <Spacer/>
        <Button onClick={()=>handleSort("asc")}>Sort in ASC</Button>
        <Button onClick={()=>handleSort("desc")} marginLeft="30px">Sort in Desc</Button>
        <Button onClick={()=>handleName("title")} marginLeft="30px">Sort by Title</Button>
        <Button onClick={()=>handleName("name")} marginLeft="30px">Sort by Name</Button>
        <Spacer/>
      </Flex>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.products}>
      {
        data?.map((el)=>(
          <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={el.image} alt={el.title}/>
            <Text>{el.title}</Text>
            <Text>{el.name}</Text>
            <Text>{el.offerprice}</Text>
            <Button colorScheme='teal' size='xs'marginBottom="8px" onClick={()=>handleCartItem(el)}>Add To Cart</Button>
          </Box>
        ))
      }
      </Grid>
      <Box marginTop="20px" marginBottom="20px">
        <Button disabled={page===1} onClick={()=>handleChange(-1)}>PREV</Button>
        <Button disabled>{page}</Button>
        <Button disabled={page===5} onClick={()=>handleChange(1)}>NEXT</Button>
      </Box>
      <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Shoes