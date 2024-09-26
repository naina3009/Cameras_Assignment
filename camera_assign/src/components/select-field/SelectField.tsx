import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { FC } from "react";


interface ISelectField {
    label : string
    options : any
    onChange : (data : any)=>void
    error ?: any
    defaultValue ?: string
}

const SelectField : FC<ISelectField> = (props)=>{
    const {label,onChange,options,error,defaultValue } = props;
    return(
          <FormControl sx={{ ml: 1, width: 180, height: 25 }} size="small" error={error}>
                <InputLabel id="demo-select-small">
                   {label}
                </InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label="Selected Product"
                    onChange={onChange}
                    defaultValue={defaultValue}
                >
                    {options.map((roleItem: any, index: any) => (
                        <MenuItem key={roleItem.id} value={roleItem.value} >
                            {roleItem.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
    )
}
export default SelectField