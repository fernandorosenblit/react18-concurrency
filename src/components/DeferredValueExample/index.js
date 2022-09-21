import { useState } from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'

import InputList from './InputList'

const DeferredValueExample = () => {
  const [input, setInput] = useState('')

  const handleChange = (e) => setInput(e.target.value)

  return (
    <Box>
      <Box mb={4} display="flex" justifyContent="center">
        <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
          <OutlinedInput
            onChange={handleChange}
            placeholder="Search user by id"
            value={input}
          />
        </FormControl>
      </Box>
      <InputList input={input} listSize={1000} />
    </Box>
  )
}

export default DeferredValueExample
