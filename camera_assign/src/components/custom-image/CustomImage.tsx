import { FC } from "react";

interface ICustomImage{
    src : string
    alt: string
    width?: string
    height ?:string
    className?: string
    style ?: any
}
const CustomImage : FC<ICustomImage> = (props)=>{
    const {src,alt,width,height,className,style} = props
    return(
        <img 
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={style}
        />
    )
}
export default CustomImage;