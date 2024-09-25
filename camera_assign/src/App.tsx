import { useContext } from "react";
import { showLoader, hideLoader } from "./api/AuthApi";
import BackendApi from "./api/BackendApi";
import   { CommonContext, CommonContextType, SnackBarAlertTypeEnum } from "./context/CommonContext";
import Dashboard from "./screens/dashboard/Dashboard";


function App() {
  const { setShowSnackBar } = useContext(CommonContext) as CommonContextType;
  let numberOfAjaxCAllPending = 0;

  BackendApi.interceptors.request.use(async (config: any) => {
    config.headers['Access-Control-Allow-Origin'] = '*';

    numberOfAjaxCAllPending++;
    showLoader();
    const token = "4ApVMln5sTxeW7GQ5VWeWiy";
    if (token)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  BackendApi.interceptors.response.use(
    (response) => {
      numberOfAjaxCAllPending--;
      if (numberOfAjaxCAllPending === 0) {
        hideLoader();
      }

      if (response?.status >= 200 && response?.status < 300) {
        return response;
      }
      return Promise.reject(response);
    },
    (err) => {
      numberOfAjaxCAllPending--;
      if (numberOfAjaxCAllPending === 0) {
        hideLoader();
      }

      if (err.message === "No internet connection") {
        // Handle no internet connection error
        setShowSnackBar({
          show: true,
          message: "No internet connection",
          alertStatus: SnackBarAlertTypeEnum.Error
        });
      } else if (!err.response) {
        // Handle network error
        setShowSnackBar({
          show: true,
          message: "Network error",
          alertStatus: SnackBarAlertTypeEnum.Error
        });
      } else if (err?.response?.data?.detail?.message) {
        setShowSnackBar({
          show: true, message: err?.response?.data?.detail?.message
            ? err?.response?.data?.detail?.message
            : "Something Went Wrong", alertStatus: SnackBarAlertTypeEnum.Error
        })
      } else {
        setShowSnackBar({
          show: true, message: err?.response?.data?.message
            ? err?.response?.data?.message
            : "Something Went Wrong", alertStatus: SnackBarAlertTypeEnum.Error
        })
      }
      return Promise.reject(err);
    }
  );
  return (
    <Dashboard/>
  );
}

export default App;


