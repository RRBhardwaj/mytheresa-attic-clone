import { Box , Button, Image, Spacer,Text,Grid,GridItem} from "@chakra-ui/react";
import styles from "./Women.module.css";


const Women = () => {
  return (
    <Box>
      <Box>
        <Image marginTop="10px" onClick={()=>console.log("Clicked on top section")} className={styles.topsection} width="80%" src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg" alt="Top Image"/>
      </Box>
      <Box position="relative" display="block">
        <Image onClick={()=>console.log("Clicked on top second section")} className={styles.topsecondsection} width="80%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1" alt="Top Second Image"/>
      </Box>
      <Box className={styles.topthirdsection} width="80%" borderWidth='1px' overflow='hidden' bg='#ebeff5'>
        <Spacer/>
        <Text paddingTop="30px" paddingBottom="8px" fontSize='lg'>DON'T MISS OUT</Text>
        <Text fontSize='3xl'>NEW ARRIVALS</Text>
        <Button bg="black" color="white" variant='outline' marginBottom="20px" marginTop="10px">SHOP NOW >></Button>
      </Box>
      <Grid
      className={styles.topfourthsection}
        h='1000px'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={4} colSpan={2} bg='tomato'></GridItem>
        <GridItem rowSpan={2} colSpan={2} bg='papayawhip'></GridItem>
        <GridItem rowSpan={2} colSpan={2} bg='tomato'></GridItem>
      </Grid>
    </Box>
  )
}

export default Women;