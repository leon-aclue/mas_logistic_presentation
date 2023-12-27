import React, {ReactNode} from 'react';
import FullSpaceBetweenContainer from "../container/FullSpaceBetweenContainer";

interface IProps{
    header?: ReactNode | ReactNode[];
    bottom?: ReactNode | ReactNode[];
    children: ReactNode | ReactNode[];
}

function BaseLayout(props: IProps) {
    const {header, bottom, children} = props;
    return (
        <FullSpaceBetweenContainer flexDirection='column'>
            {header}
            {children}
            {bottom}
        </FullSpaceBetweenContainer>
    );
}

export default BaseLayout;