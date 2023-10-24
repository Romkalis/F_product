import React from "react";
import './styles'
import { StyledProducts, StyledSection, StyledAside } from "./styles";
import SideMenu from '../side-menu/side-menu'
import SideOrder from "../SideOrder/side-order";
import ProductCard from '../../ui/productCard/productCard'



const BuyMain = (props) => {

    return (
        <>
        <StyledSection>
            <StyledAside>
                <SideMenu {...props}></SideMenu>
                <SideOrder {...props}></SideOrder>
            </StyledAside>

            <StyledProducts>
                <ProductCard {...props}></ProductCard>
            </StyledProducts>
        </StyledSection>
        </>
    )
}

export default BuyMain
