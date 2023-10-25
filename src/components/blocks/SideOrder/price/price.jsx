import React from "react";
import {StyledPrice, PriceTitle} from './styles'


function Price({children}) {
    
    return (
        <>
        <PriceTitle>Цена</PriceTitle>
        <StyledPrice>{children} руб.</StyledPrice>
        </>
    )
    
}

export default Price