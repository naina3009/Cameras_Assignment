import { FC, Fragment, useEffect, useState } from "react";
import { Box, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip, Grid2,Grid, IconButton, Stack } from "@mui/material";
import "./Table.css"
import CustomServices from "../../services/CustomServices";
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import StorageIcon from '@mui/icons-material/Storage';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import InputField from "../search-field/InputField";
import SelectField from "../select-field/SelectField";
import { AllCameraLocations, AllCameraStatus, TableData, TableHeaders } from "../../constants/data/DummyData";
import Heading from "../heading/Heading";


const CustomTables : FC= (props)=>{
    
    const [cameraList, setCameraList] = useState<any[]>(TableData);
    const [filterCameraList, setFilterCameraList] = useState<any[]>([]);
    const [currentPaginationPage, setCurrentPaginationPage] = useState(1);
    
const itemsPerPage = 5;
    const totalItems: any = filterCameraList?.length;
    const paginationCount = Math.ceil(totalItems / itemsPerPage);
    const indexOfLastItem = currentPaginationPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterCameraList?.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCameraList(TableData);
        setFilterCameraList(TableData);
    }, []);
    

  const handlePaginationChange = ( value: any) => {
    setCurrentPaginationPage(value);
  };

  const handleSearch = (searchedData: any) => {
    if (searchedData === "") {
        setFilterCameraList(cameraList)
    } else {
        let filteredList = cameraList.filter((item:any) => (item?.tasks?.toLowerCase().includes(searchedData?.toLowerCase())|| item?.recorder?.toLowerCase().includes(searchedData?.toLowerCase())|| item?.name.name1?.toLowerCase().includes(searchedData?.toLowerCase())));
        setFilterCameraList(filteredList);
    }
    setCurrentPaginationPage(1);
}
const handleLocationChange = (data: any) => {

    console.log(data.target.value,"+hbbibb")
    if (data.target.value === "allLocation") {
        setFilterCameraList(cameraList);
    } else {
        let filteredData = cameraList.filter(item => item.location.value.toLowerCase() === data.target.value);
        setFilterCameraList(filteredData);
    }
    setCurrentPaginationPage(1);
}
const handleStatusChange = (data: any) => {
    if (data.target.value === "all") {
        setFilterCameraList(cameraList);
    } else {
        let filteredData = cameraList.filter(item => item.status.toLowerCase() === data.target.value);
        setFilterCameraList(filteredData);
    }
    setCurrentPaginationPage(1);
}



    return(
        <Fragment>
            <div className="d-flex  justify-content-between">
                <div className="mb-3">
                    <Heading 
                        heading={"Cameras"} 
                        varient={"h6"}
                    />

                    <Heading 
                        heading={"Manage your cameras here."} 
                        varient={"body2"}
                    />
                </div>
                <InputField
                    label={"Search"}
                    type={"search"}
                    onChange={(data: any) => handleSearch(data.target.value)}
                />
            </div>
          
            <Stack
                    id="search for member,roles and invite"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    className="search-container mb-4 mt-2"
                >
                    <Stack
                        id="search member and roles"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Stack sx={{ minWidth: 120 }}>
                            <SelectField
                                label={"Location"}
                                options={AllCameraLocations}
                                defaultValue={AllCameraLocations[0].value}
                                onChange={(data: any) => handleLocationChange(data)}

                            
                            />
                        </Stack>
                        <Stack sx={{ minWidth: 120 }}>
                            <SelectField
                                label={"Status"}
                                options={AllCameraStatus}
                                defaultValue={AllCameraStatus[0].value}
                                onChange={(data: any) => handleStatusChange(data)}
                            />
                        </Stack>
                    </Stack>
                </Stack>

        <Box>
            <TableContainer className="table1 outlined ">
                <Table
                    sx={{ minWidth: { xs: "auto", md: 770,borderRadius:"10px" } }}
                    aria-label="cameras"
                >
                    <TableHead >
                        <TableRow>
                            {
                                TableHeaders.map((item:any)=>(
                                    <TableCell component="th"  key={item.id}>{item.name}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {currentItems && currentItems.length > 0 ? (
                            currentItems.map((item: any) => (
                            <TableRow key={item.id} className="bg-white">
                                <TableCell data-th="Name">
                                <Typography sx={{ wordBreak: "break-word" }}>
                                       <CircleRoundedIcon color={item.name.color}/> {item.name.name1} {item.name.icon && <ErrorOutlineRoundedIcon color="warning"/>}
                                    </Typography>  
                                </TableCell>
                                <TableCell data-th="Health">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        <FilterDramaIcon color="disabled"/> {item.health.health1}
                                        <StorageIcon color="disabled"/> {item.health.health2}
                                    </Typography>
                                    
                                </TableCell>

                                <TableCell data-th="Mount Description">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        {item.location.label}
                                    </Typography>
                                </TableCell>
                                <TableCell data-th="Mount Description">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        {item.recorder}
                                    </Typography>
                                </TableCell>
                                <TableCell data-th="Mount Description">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        {item.tasks}
                                    </Typography>
                                </TableCell>

                                <TableCell data-th="Status">
                                    <Chip
                                        data-testid='customChip'
                                        style={{backgroundColor : (item.status==="Active" ? "#aef5d4":"#c0c7cc"),color : item.status === "Active" ? "green" : "black"}}
                                        label={item.status}
                                    />
                                </TableCell>
                                <TableCell>
                                <Button
                                    color="inherit"
                                    onClick={()=>{}}
                                >
                                    {item?.action === "disable" ? <DoDisturbAltIcon/> : <CheckCircleOutlineIcon/>}

                                </Button>
                                </TableCell>
                            </TableRow>
                            ))) : (
                            <TableRow className="bg-white">
                            <TableCell
                                colSpan={20}
                                sx={{ pl: "10px !important", width: "100% !important" }}
                            >
                                <Box p={2} textAlign="center">
                                <Typography component="p" variant="h6">
                                    No cameras ...
                                </Typography>
                                </Box>
                            </TableCell>
                            </TableRow>

                        )}
                    </TableBody>
                </Table>

        {filterCameraList && (
                <Box className="footer-actions-buttons" mt="auto">
                <Grid2 container alignItems="center" spacing={1}>
                    <Grid item mr="auto">
                    <Typography color="secondary">
                        {currentPaginationPage} of {paginationCount}
                    </Typography>
                    </Grid>
                    <Grid item>
                    <IconButton
                        color="secondary"
                        disabled={currentPaginationPage === 1}
                        onClick={() =>
                        handlePaginationChange(currentPaginationPage - 1)
                        }
                    >
                        <ArrowBackIosRoundedIcon />
                    </IconButton>
                    <IconButton
                        color="secondary"
                        disabled={currentPaginationPage === paginationCount}
                        onClick={() =>
                        handlePaginationChange(currentPaginationPage + 1)
                        }
                    >
                        <ArrowForwardIosRoundedIcon />
                    </IconButton>
                    </Grid>
                </Grid2>
                </Box>
            )}
            </TableContainer>
        </Box>
        </Fragment>
    )
}
export default CustomTables;