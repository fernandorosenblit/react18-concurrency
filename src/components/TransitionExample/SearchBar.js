import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import FormControl from '@mui/material/FormControl'

const SearchBar = ({ onChange, currentValue }) => {
  return (
    <Box mb={4} display="flex" justifyContent="center">
      <FormControl sx={{ m: 1, width: '50%' }} variant="outlined">
        <OutlinedInput
          onChange={onChange}
          placeholder="Search user by id"
          value={currentValue}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}

export default SearchBar
