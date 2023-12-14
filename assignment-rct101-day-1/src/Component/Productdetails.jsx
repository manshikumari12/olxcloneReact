
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    // useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';

  import Counter from "./Counter"
  import "../Css/product.css"
  export default function ProductDetails({image,category,price,description}) {
  
    return (
      <Container maxW={'7xl'} display="flex" >
        <SimpleGrid
          // border="1px solid red" 
       marginTop={60}
         display="flex"
         justifyContent="space-around"
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex  width="380px">
            <Image
         
              rounded={'md'}
              alt={category}
              src={
                image
              }
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {category}
              </Heading>
              <Text
                fontWeight={300}
                fontSize={'2xl'}>
                ${price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                
                <Text fontSize={'lg'}>
                    {description}
                </Text>
              </VStack>
              <Box>
                
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <Counter/>
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
          <Button
  textTransform={'uppercase'}
  _hover={{
    transform: 'translateY(2px)',
    boxShadow: 'lg',
  }}
  style={{ width: 'auto', height: '40px',marginTop:'300px',marginRight:"100px" }}
>
  Add to cart
</Button>
        </SimpleGrid>
      </Container>
    );
  }