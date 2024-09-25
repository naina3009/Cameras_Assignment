import { FC } from "react";
import CustomImage from "../../components/custom-image/CustomImage";
import Images from "../../constants/image/Image";
import "./Dashboard.css"
import Heading from "../../components/heading/Heading";
import CustomTables from "../../components/tables/CustomTable";
import SelectField from "../../components/select-field/SelectField";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import SearchField from "../../components/search-field/SearchField";


const Dashboard : FC= ()=>{

    const {control,register,formState: { errors },} = useForm({mode: "onChange", shouldFocusError: false,});
    return(
        <div>
            <div className="dashboard-logo">
                <CustomImage 
                    src={Images.logo} 
                    alt={"logo"}
                />
            </div>
            <div>
            
            <Heading heading={"Cameras"} varient={"h6"}/>
            <Heading heading={"Manage your cameras here."} varient={"body2"}/>

            </div>
            <div className="dashboard-logo">
            <Box mx={3} width={150}>
                <SelectField
                    labelName="Location"
                    placeholder="Location"
                    controlName="location"
                    optionName="name"
                    optionValue="value"
                    options={['configList',"dv",'scdc',"dcdc"]}
                    register={register}
                    errors={errors}
                    rules={{ required: true }}
                    defaultValue=''
                    control={control}
                />
    
            </Box>
            <Box mx={3} width={150}>
                <SelectField
                    labelName="Status"
                    placeholder="Status"
                    controlName="status"
                    optionName="name"
                    optionValue="value"
                    options={['configList',"dv",'scdc',"dcdc"]}
                    register={register}
                    errors={errors}
                    rules={{ required: true }}
                    defaultValue=''
                    control={control}
                />
                <SearchField/>
    
            </Box>
            </div>
            <CustomTables/>
        </div>
    

    )
}
export default Dashboard;