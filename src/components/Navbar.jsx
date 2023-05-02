import {
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  Avatar,
  AvatarBadge,
  useToast,
} from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'

function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: false,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />,
    })
  }

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer></Spacer>

      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png" w="12" h="12">
          <AvatarBadge bg="teal.500" boxSize="1.3em">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninjs.dev</Text>
        <Button type="button" colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  )
}
export default Navbar
