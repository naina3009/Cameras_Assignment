import { FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';


const SearchField : FC= ()=>{
    return(
            <FormControl sx={{ m: 1, width: '25ch',height:'7ch' }} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'search',
                    }}
                />
            </FormControl>
    )
}
export default SearchField;