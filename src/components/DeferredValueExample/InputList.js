import { useDeferredValue, useEffect, useMemo } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const InputList = ({ input, listSize }) => {
  const defferedInput = useDeferredValue(input)

  useEffect(() => {
    console.log(`Input: ${input} - Deffered input: ${defferedInput}`)
  }, [input, defferedInput])

  const generateListItems = useMemo(() => {
    const _list = []
    for (let i = 1; i < listSize; i++) {
      _list.push(
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
              <Typography variant="h4" component="div">
                {`Product #${i}`}
              </Typography>
              <Typography variant="h6" component="div">
                {`Description: ${input}`}
              </Typography>
              <Box>
                <Button size="small">View product</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )
    }
    return _list
  }, [input, listSize])

  return (
    <Grid container spacing={2}>
      {generateListItems}
    </Grid>
  )
}

export default InputList
