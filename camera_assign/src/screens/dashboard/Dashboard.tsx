import { FC } from "react";
import CustomImage from "../../components/custom-image/CustomImage";
import Images from "../../constants/image/Image";
import "./Dashboard.css"
import CustomTables from "../../components/tables/CustomTable";
import { Box } from "@mui/material";


const Dashboard : FC= ()=>{

    return(
        <Box className="dashboard">
            <div className="dashboard-logo">
                <CustomImage 
                    src={Images.logo} 
                    alt={"logo"}
                />
            </div>
                  <CustomTables />
        </Box>
    

    )
}
export default Dashboard;