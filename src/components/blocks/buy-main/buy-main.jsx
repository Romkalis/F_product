import React from "react";
import './styles'
import { StyledProducts, StyledSection, StyledAside } from "./styles";
import ProductCard from '../../ui/productCard/productCard'


const BuyMain = (props) => {

    return (
        <>
        <StyledSection>
            <StyledAside>
                <p className="">здесь будет боковое меню</p>
            </StyledAside>

            <StyledProducts>
                <p className="">здесь будет основной конент</p>
                <ProductCard {...props}></ProductCard>
            </StyledProducts>
        </StyledSection>
        </>
    )
}

export default BuyMain
