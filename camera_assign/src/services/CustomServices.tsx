import BackendApi from "../api/BackendApi";
import ApiUrl from "../constants/data/ApiUrl";

const getCameraList = async () => {
    const res = await BackendApi.get(ApiUrl.CameraListUrl);
    return res.data;
};

const updateCameraStatus = async (data: any) => {
    const res = await BackendApi.post(ApiUrl.UpdateStatusUrl, data);
    return res.data;
};

const CustomServices={
    getCameraList,
    updateCameraStatus
}
export default CustomServices;