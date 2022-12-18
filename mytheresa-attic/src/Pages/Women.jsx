import { Box , Button, Image, Spacer,Text,Grid,GridItem} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import styles from "./Women.module.css";


const Women = () => {
  let navigate = useNavigate();
  const NavigatePage = () => {
    navigate("/sale")
    // console.log("Hello");
  }
  return (
    <Box>
      <Box>
        <Image marginTop="10px" onClick={()=>NavigatePage()} className={styles.topsection} width="80%" src="https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/15_Sale/FW21/WW_Sale_Wave50/ONSITE_BANNER_SALE_50_desktop_en_1x_20211119133215.jpg" alt="Top Image"/>
      </Box>
      <Box position="relative" display="block">
        <Image className={styles.topsecondsection} width="80%" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1" alt="Top Second Image"/>
      </Box>
      <Box className={styles.topthirdsection} width="80%" borderWidth='1px' overflow='hidden' bg='#ebeff5'>
        <Spacer/>
        <Text paddingTop="30px" paddingBottom="8px" fontSize='lg'>DON'T MISS OUT</Text>
        <Text fontSize='3xl'>NEW ARRIVALS</Text>
        <Button bg="black" color="white" variant='outline' marginBottom="20px" marginTop="10px" hover="black" onClick={()=>navigate("/newarrival")}>SHOP NOW >></Button>
      </Box>
      <Grid
      className={styles.topfourthsection}
        h='1180px'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={4} colSpan={2} bg='white'>
          <Text marginTop="20px" fontSize='sm'>PARIS TEXAS X MYTHERESA</Text>
          <Text fontSize='3xl'>The Exclusive Capsule</Text>
          <Text fontSize='3xl'>Collection</Text>
          <Image marginLeft="5px" marginTop="10px" src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/Paris-Texas-ActboxTall_2x_20221212102147.jpg?imwidth=600&imdensity=1" alt="picture"/>
          <Button size='md' bg="black" color="white" variant='solid' marginBottom="20px" marginTop="20px" hover="black" onClick={()=>navigate("/clothing")}>SHOP NOW >></Button>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg='white'>
          <Text marginTop="20px" fontSize='sm'>SEASONAL FLATS</Text>
          <Text fontSize='3xl'>Because cozy feet are</Text>
          <Text fontSize='3xl'>happy feet</Text>
          <Image marginLeft="5px" marginTop="12px" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_3_2x_20221212110651.jpg?imwidth=600&imdensity=1" alt="picture"/>
          <Button bg="black" color="white" variant='solid'hover="black" marginTop="25px" marginBottom="50px" size="md" onClick={()=>navigate("/shoes")}>SHOP NOW >></Button>
          <hr/>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg='white'>
          <Text marginTop="20px" fontSize='sm'>CONTEMPORARY JEWELRY</Text>
          <Text fontSize='3xl'>Craft and style rolled into</Text>
          <Text fontSize='3xl'>one</Text>
          <Image marginLeft="5px" marginTop="18px" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_4_2x_20221212110650.jpg?imwidth=600&imdensity=1" alt="picture"/>
          <Button bg="black" color="white" variant='solid'hover="black" marginTop="30px" marginBottom="50px" size="md"  onClick={()=>navigate("/jewelry")}>SHOP NOW >></Button>
        </GridItem>
      </Grid>
      <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
      </Box>
      <Grid
      className={styles.topfourthsection}
        h='1180px'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} bg='white'>
          <Text marginTop="20px" fontSize='sm'>WHAT'S THE ANGLE?</Text>
          <Text fontSize='3xl'>Sharpen your edit of</Text>
          <Text fontSize='3xl'>winter-sun shades</Text>
          <Image marginLeft="5px" marginTop="18px" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1" alt="picture"/>
          <Button bg="black" color="white" variant='solid'hover="black" marginTop="30px" marginBottom="50px" size="md" onClick={()=>navigate("/accessories")}>SHOP NOW >></Button>
          <hr/>
        </GridItem>
        <GridItem rowSpan={4} colSpan={2} bg='white'>
          <Text marginTop="20px" fontSize='sm'>GLAMOROUS GOWNS</Text>
          <Text fontSize='3xl'>Designed to make a</Text>
          <Text fontSize='3xl'>statement</Text>
          <Image marginLeft="5px" marginTop="10px" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_ActboxTall_2_2x_20221213120617.jpg?imwidth=600&imdensity=1" alt="picture"/>
          <Button size='md' bg="black" color="white" variant='solid' marginBottom="20px" marginTop="20px" hover="black" onClick={()=>navigate("/newarrival")}>SHOP NOW >></Button>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} bg='white'>
          <Text marginTop="20px" fontSize='sm'>YOUR NEW FLEX</Text>
          <Text fontSize='3xl'>The Antigona Stretch Bag</Text>
          <Text fontSize='3xl'>from Givenchy</Text>
          <Image marginLeft="5px" marginTop="18px" src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_2_2x_20221212110608.jpg?imwidth=600&imdensity=1" alt="picture"/>
          <Button bg="black" color="white" variant='solid'hover="black" marginTop="30px" marginBottom="50px" size="md" onClick={()=>navigate("/bags")}>SHOP NOW >></Button>
        </GridItem>
      </Grid>
      <Box marginTop="20px" marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
      </Box>
      <Box className={styles.topfifthsection}>
        <Box>
          <Text marginTop="20px" fontSize='sm'>PREP SCHOOL</Text>
          <Text fontSize='3xl'>Where polished is the guiding</Text>
          <Text fontSize='3xl'>principle</Text>
        </Box>
        <Grid
          marginTop="15px"
          h='320px'
          templateRows='repeat(1, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={4}
        >
          <GridItem colSpan={1} bg='white'>
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_1_2x_20221212102029.jpg" alt="image"/>
            <Text fontSize='sm'>Self-Portrait</Text>
          </GridItem>
          <GridItem colSpan={1} bg='white'>
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_2_2x_20221212102030.jpg" alt="image"/>
            <Text fontSize='sm'>Gucci</Text>
          </GridItem>
          <GridItem colSpan={1} bg='white'>
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_3_2x_20221212102029.jpg" alt="image"/>
            <Text fontSize='sm'>Valentino</Text>
          </GridItem>
          <GridItem colSpan={1} bg='white'>
            <Image src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_4_2x_20221212102028.jpg" alt="image"/>
            <Text fontSize='sm'>Oscar de la Renta</Text>
          </GridItem>
        </Grid>
        <Button bg="black" color="white" variant='solid'hover="black" marginTop="30px" marginBottom="30px" size="md" onClick={()=>navigate("/clothing")}>SHOP NOW >></Button>
      </Box>
      <Box marginBottom="20px" width="80%" marginLeft="150px">
        <hr/>
      </Box>
      <Footer />
    </Box>
  )
}

export default Women;