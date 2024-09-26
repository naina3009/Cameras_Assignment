import { TextField } from "@mui/material";
import { FC } from "react";

export enum InputVarient {
    OUTLINED = "outlined",
    FILLED = "filled",
    STANDARD= "standard"
}

interface IInputField{
    label : string
    type : any
    varient ?: InputVarient
    placeholder ?: string,
    onChange : (data : any)=>void
    error ?: any
    required  ?: boolean
    className ?: any
    helperText ?: any
    sx ?: any
    multiline ?: boolean
    maxRows ?: number
    defaultValue ?: any
}

const InputField : FC<IInputField> = (props)=>{
    const {label,placeholder,onChange,type,varient,error,required,className,helperText,sx,maxRows,multiline,defaultValue} = props;
    return(
            <TextField
                id="filled-search"
                label={label}
                type={type}
                placeholder={placeholder}
                variant={varient || "outlined"}
                onChange={onChange}
                error={error}
                required={required}
                className={className}
                helperText={helperText}
                sx={sx}
                maxRows={maxRows}
                multiline={multiline}
                defaultValue={defaultValue} 
            />
    )
}
export default InputField;