import React, {ReactNode} from 'react';
import FullSpaceBetweenContainer from "../container/FullSpaceBetweenContainer";
import {MAIN_COMPONENT_ID} from "../../react-app-env";
import {useSelector} from "react-redux";
import {globalSliceSelector} from "../../store/slice/globalSlice";

interface IProps {
    header?: ReactNode | ReactNode[];
    bottom?: ReactNode | ReactNode[];
    children: ReactNode | ReactNode[];
}

function BaseLayout(props: IProps) {
    const {header, bottom, children} = props;
    const {printMode} = useSelector(globalSliceSelector);

    return (
        <FullSpaceBetweenContainer id={MAIN_COMPONENT_ID} flexDirection='column'>
            {header}
            {children}
            {!printMode && (
                bottom
            )}
        </FullSpaceBetweenContainer>
    );
}

export default BaseLayout;