import React, {useState} from "react";
import './styles'
import { StyledProducts, StyledSection, StyledAside, Wrapper } from "./styles";
import SideMenu from '../side-menu/side-menu'
import SideOrder from "../SideOrder/side-order";
import ProductCard from '../../ui/productCard/productCard'



const BuyMain = (props) => {

    const [price, setPrice] = useState(0)

    const isChecked = (check) => setPrice(price + check);
    

    return (
        <>
        <StyledSection>
            <StyledAside>
                <SideMenu {...props} isChecked={isChecked}></SideMenu>
                <SideOrder {...props} price={price}></SideOrder>
            </StyledAside>

            <StyledProducts>
                <ProductCard {...props}></ProductCard>
            </StyledProducts>
        </StyledSection>
        </>
    )
}

export default BuyMain
