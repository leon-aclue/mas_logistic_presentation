import React, {ReactNode} from 'react';
import FullSpaceBetweenContainer from "../container/FullSpaceBetweenContainer";
import {MAIN_COMPONENT_ID} from "../../react-app-env";

interface IProps {
    header?: ReactNode | ReactNode[];
    children: ReactNode | ReactNode[];
}

function BaseLayout(props: IProps) {
    const {header, children} = props;

    return (
        <FullSpaceBetweenContainer id={MAIN_COMPONENT_ID} flexDirection='column'>
            {header}
            {children}
        </FullSpaceBetweenContainer>
    );
}

export default BaseLayout;