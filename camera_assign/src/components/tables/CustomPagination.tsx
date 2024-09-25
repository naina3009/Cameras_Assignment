
import { Pagination } from "@mui/material/";
import { FC } from "react";

interface IPagination {
    count?: number | any;
    size?: string | any;
    sx?: any;
    onChange?: any;
    page?: number;
    className?: string;
    variant?: string | any;
    shape?: string | any;
};

const CustomPagination : FC<IPagination>= (props) => {
    const { count,className,onChange,page,shape,size, sx,variant} = props;
    return (
        <Pagination
            count={count}
            size={size}
            sx={sx}
            onChange={onChange}
            page={page}
            className={className}
            variant={variant}
            shape={shape}
        />
    );
};

export default CustomPagination;
