import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {Box,Text,Image,Button,Grid} from "@chakra-ui/react";
import styles from "./mens.module.css";

const getMensData = (page) => {
  return axios.get(`http://localhost:5000/shoes?_page=${page}&_limit=12`);
}


const Shoes = () => {
  const [data, setData] = useState([]);
  const [page,setPage] = useState(1);

  useEffect(()=>{
    getMensData(page)
    .then((res)=>{
      // console.log(res);
      setData(res.data);
    })
  },[page])
  console.log(data);

  const handleChange = (value) => {
    setPage(value+page);
  }
  return (
    <Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.products}>
      {
        data?.map((el)=>(
          <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={el.image} alt={el.title}/>
            <Text>{el.title}</Text>
            <Text>{el.type}</Text>
            <Text>{el.offerprice}</Text>
            <Button colorScheme='teal' size='xs'marginBottom="8px">Add To Cart</Button>
          </Box>
        ))
      }
      </Grid>
      <Box marginTop="20px" marginBottom="20px">
        <Button disabled={page===1} onClick={()=>handleChange(-1)}>PREV</Button>
        <Button disabled>{page}</Button>
        <Button disabled={page===5} onClick={()=>handleChange(1)}>NEXT</Button>
      </Box>
    </Box>
  )
}

export default Shoes