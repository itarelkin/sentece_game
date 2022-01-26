import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

type MainContainerProps = React.PropsWithChildren<{}>;

export default function MainContainer({ children, ...other}: MainContainerProps){
    return(
        <>
    {children}
    </>
    )
    
}