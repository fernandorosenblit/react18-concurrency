import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const UserCard = ({ user }) => {
  return (
    <Grid item xs={2} md={3} lg={4}>
      <Card sx={{ display: 'flex' }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5" component="div">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.userId}
          </Typography>
          <Box>
            <Button size="small">View profile</Button>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 151, flexShrink: 0 }}
          image={user.avatar}
          alt="Avatar"
        />
      </Card>
    </Grid>
  )
}

export default UserCard
