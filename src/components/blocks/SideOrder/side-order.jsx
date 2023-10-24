import React from "react";
import {OrderBlock, OrderTitle,StyledInput,OrderButton } from './styles'


function SideOrder({products}) {
    return (
        <OrderBlock> 
            <OrderTitle>Сделать заказ</OrderTitle>
            <StyledInput type="text" placeholder="Введите адрес доставки"></StyledInput>
            <p> Здесь будем считать и выводить цену</p>
            <OrderButton>Купить</OrderButton>
        
        {/* <MenuTitle>Выберите продукты</MenuTitle>

        {products && 
            products.length &&
            products.map((product) => {

                return (
                     <Checkbox price={product.description.price}>{product.name}</Checkbox>
                )
            })} */}
        </OrderBlock>
    )
}

export default SideOrder