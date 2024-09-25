
import { createContext, useState } from 'react';
export enum SnackBarAlertTypeEnum {
    Error = 'error',
    Warning = 'warning',
    Success='success',
    Info='info',
  }
export type SnackBarType={
    show:boolean;
    message:string;
    alertStatus:SnackBarAlertTypeEnum
}

export type ConnectionType = {
  name: string;
  path: string;
}

type ContextProviderProps = {
    children: React.ReactNode;
};

export type CommonContextType = {
    showSnackBar: SnackBarType;
    setShowSnackBar: (value: SnackBarType) => void;
};

export const CommonContext = createContext<CommonContextType | null>(null);

const CommonContextProvider = ({ children }: ContextProviderProps) => {
    const [showSnackBar, setShowSnackBarState] = useState<SnackBarType>({show:false,message:'',alertStatus:SnackBarAlertTypeEnum.Info});

    const setShowSnackBar = (value: SnackBarType) => {
        if (value) {
            setShowSnackBarState(value);
        }
    };

    return (
        <CommonContext.Provider value={{  showSnackBar, setShowSnackBar }}>
            {children}
        </CommonContext.Provider>
    );
};

export default CommonContextProvider;
