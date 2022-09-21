import { useState, useTransition } from 'react'

import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'

import { createRandomUsers } from './utils/createRandomUsers'

import SearchBar from './SearchBar'
import Loading from '../common/Loading'

import UsersList from './UsersList'

const USERS_LENGTH = 2000

const dummyUsers = createRandomUsers(USERS_LENGTH)

const filterUsers = (term) => {
  if (!term) return dummyUsers

  return dummyUsers.filter((user) =>
    user.userId.toLowerCase().includes(term.toLowerCase())
  )
}

const TransitionExample = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState(dummyUsers)
  const [isPending, startTransition] = useTransition()

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
    startTransition(() => setUsers(filterUsers(e.target.value)))
    // setUsers(filterUsers(e.target.value))
  }

  return (
    <Box p={4}>
      <FormGroup>
        <SearchBar onChange={handleInputChange} currentValue={searchTerm} />
      </FormGroup>
      {isPending ? <Loading /> : <UsersList users={users} />}
      {/* <UsersList users={users} /> */}
    </Box>
  )
}

export default TransitionExample
