import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const NoResults = () => (
  <Grid item xs={12}>
    <Typography variant="subtitle1" align="center" paragraph>
      No users found
    </Typography>
  </Grid>
)

export default NoResults
