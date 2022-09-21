import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => (
  <Grid item sm={12}>
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  </Grid>
)

export default Loading
