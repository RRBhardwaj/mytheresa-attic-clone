import { Box, Image,Grid,Text,Button } from "@chakra-ui/react"
import Footer from "../Components/Footer";
import styles from "../Pages/mens.module.css";
import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

const SearchPage = () => {
    const {data} = useContext(SearchContext);
    // console.log(data)
  return (
    <Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} className={styles.products}>
        {
            data?.map((el)=>(
            <Box key={Math.random()} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={el.image} alt={el.title}/>
                <Text>{el.name}</Text>
                <Text>{el.title}</Text>
                <Text>{el.type}</Text>
                <Text as='s' color="red">{el.originalprice}</Text>
                <Text>{el.price}</Text>
                <Text>{el.offerprice}</Text>
                <Text color="red">{el.off}</Text>
                <Button colorScheme='teal' size='xs'marginBottom="8px">Add To Cart</Button>
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

export default SearchPage