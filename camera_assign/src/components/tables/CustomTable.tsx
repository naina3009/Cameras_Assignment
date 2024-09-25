import { FC, useEffect, useState } from "react";
import CustomPagination from "./CustomPagination";
import { Box, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip } from "@mui/material";
import { TableHeaders } from "../../constants/data/DummyData";
import "./CustomTableCss.css"
import CustomServices from "../../services/CustomServices";

const CustomTables : FC= ()=>{

    const [cameraList,setCameraList] = useState<any[]>([]);
    const [cameraCurrentPage, setCameraCurrentPage] = useState<any[]>();
    
    const [currentPaginationPage, setCurrentPaginationPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems: any = cameraList?.length;
    const paginationCount = Math.ceil(totalItems / itemsPerPage);
    const indexOfLastItem = currentPaginationPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cameraList?.slice(indexOfFirstItem, indexOfLastItem);
 

    const [selectedCameraDetails,setSelectedCameraDetail] = useState<any>({})

    const fetchCameraList = () => {
        CustomServices.getCameraList().then((res: any) => {
            if (res?.statusCode === 200) {
                setCameraList(res);
                console.log(res)
            }

        }).catch((err) => {
        });
    };

    useEffect(()=>{
        fetchCameraList()
    },[])

    useEffect(() => {
        if (cameraList.length > 0) {
            setCameraCurrentPage(currentItems);
        } else {
            setCameraCurrentPage([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cameraList,cameraCurrentPage]);

  const handlePaginationChange = (event: any, value: any) => {
    setCurrentPaginationPage(value);
  };






    return(
        <Box>
            <TableContainer className="table1 outlined">
                <Table
                    sx={{ minWidth: { xs: "auto", md: 770 } }}
                    aria-label="Connections"
                >
                    <TableHead>
                        <TableRow>
                            {
                                TableHeaders.map((item:any)=>(
                                    <TableCell component="th"  key={item.id}>{item.name}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cameraCurrentPage && cameraCurrentPage.length > 0 ? (
                            cameraCurrentPage.map((item: any, index: number) => (
                            <TableRow key={index} className="bg-white">
                                <TableCell data-th="Connection Name">
                                {item?.name}
                                </TableCell>
                                <TableCell data-th="Mount Point">
                                </TableCell>

                                <TableCell data-th="Mount Description">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        {item.location}
                                    </Typography>
                                </TableCell>
                                <TableCell data-th="Mount Description">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        {item.recorder}
                                    </Typography>
                                </TableCell>
                                <TableCell data-th="Mount Description">
                                    <Typography sx={{ wordBreak: "break-word" }}>
                                        {item.task}
                                    </Typography>
                                </TableCell>

                                <TableCell data-th="Status">
                                <Chip
                                    data-testid='customChip'
                                    style={{backgroundColor : "green",color : "white"}}
                                    label={item.label}
                                />
                                </TableCell>
                                <TableCell>
                                <Button
                                    color="error"
                                    onClick={()=>{}}
                                >
                                    {item?.status ? "Active" : 'Inactive'}

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

                {cameraCurrentPage && cameraCurrentPage.length > 0 && (
                    <CustomPagination
                        count={paginationCount}
                        page={currentPaginationPage}
                        onChange={handlePaginationChange}
                        sx={{ mt: 5, ".MuiPagination-ul": { justifyContent: "center" } }}
                        className="pagination1"
                        variant="outlined"
                        shape="rounded"
                    />
                )}
            </TableContainer>
        </Box>
    )
}
export default CustomTables;