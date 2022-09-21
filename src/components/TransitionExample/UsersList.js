import Grid from '@mui/material/Grid'

import UserCard from './UserCard'
import NoResults from '../common/NoResults'

const UsersList = ({ users }) => {
  if (!users.length) {
    return <NoResults />
  }

  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <UserCard key={`${user.username}-${user.firstName}`} user={user} />
      ))}
    </Grid>
  )
}

export default UsersList
