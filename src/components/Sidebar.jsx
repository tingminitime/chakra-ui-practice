import { NavLink } from 'react-router-dom'
import { List, ListItem, ListIcon } from '@chakra-ui/react'
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'

function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white"></ListIcon>
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon} color="white"></ListIcon>
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} color="white"></ListIcon>
          Profile
        </NavLink>
      </ListItem>
    </List>
  )
}
export default Sidebar
