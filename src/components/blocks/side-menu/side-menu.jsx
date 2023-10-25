import React from "react";
import {MenuTitle, ProductsList} from './styles'
import Checkbox from "./checkbox/checkbox";


function SideMenu({products, isChecked}) {
    
    return (
        <ProductsList>  
        <MenuTitle>Выберите продукты</MenuTitle>

        {products && 
            products.length &&
            products.map((product) => {

                return (
                     <Checkbox price={product.description.price} isChecked={isChecked}>{product.name}</Checkbox>
                )
            })}
        </ProductsList>
    )
}

export default SideMenu