import {ICameraConfig, setCameraConfig} from "../../store/slice/cameraSlice";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

interface CameraHandlerProps {
    cameraConfig?: ICameraConfig;
}

function CameraHandler(props: CameraHandlerProps) {
    const {cameraConfig} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCameraConfig(cameraConfig));
    })

    return null;
}

export default CameraHandler;