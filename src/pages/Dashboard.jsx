import { ViewIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Text,
  Heading,
  Flex,
  HStack,
  Button,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Avatar,
} from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

export const fetchTasksLoader = async () => {
  const res = await fetch('http://localhost:3005/tasks')
  return res.json()
}

export default function Dashboard() {
  const tasks = useLoaderData()

  return (
    <SimpleGrid p="10px" columns={4} spacing="10" minChildWidth="300px">
      {tasks &&
        tasks.map(task => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img}></Avatar>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider w="85%" mx="auto" borderColor="gray.200"></Divider>

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  )
}
