import { Typography } from "@mui/material";
import { FC } from "react";

interface IHeading{
    heading : string
    varient ?: any
}
const Heading : FC<IHeading>=(props)=>{
    const {heading,varient} = props
    return(
        <Typography variant={varient} component="h5">
            {heading}
        </Typography>
    )
}
export default Heading;