import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
} from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer></Spacer>

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninjs.dev</Text>
        <Button type="button" colorScheme="purple">
          Logout
        </Button>
      </HStack>
    </Flex>

    // <Flex
    //   bg="gray.200"
    //   justify="space-around"
    //   wrap="wrap"
    //   gap="2"
    // >
    //   <Box
    //     w="150px"
    //     h="50px"
    //     bg="red"
    //   >
    //     1
    //   </Box>
    //   <Box
    //     w="150px"
    //     h="50px"
    //     bg="blue"
    //   >
    //     2
    //   </Box>
    //   <Box
    //     w="150px"
    //     h="50px"
    //     bg="green"
    //     flexGrow="1"
    //   >
    //     3
    //   </Box>
    //   <Box
    //     w="150px"
    //     h="50px"
    //     bg="yellow"
    //     flexGrow="2"
    //   >
    //     4
    //   </Box>
    // </Flex>
  )
}
export default Navbar
