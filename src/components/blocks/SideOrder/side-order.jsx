import React, {useState} from "react";
import Price from './price/price'
import {OrderBlock, OrderTitle,StyledInput,OrderButton } from './styles'


function SideOrder({price}) {
    const [adress, setAdress] = useState(null)

    const handlerBuy = () => {
        alert (`Ваш заказ? стиоимостью ${price} собирается и будет доставлен по адресу ${adress}`)
    }
    
    return (
        <OrderBlock> 
            <OrderTitle>Сделать заказ</OrderTitle>
            <StyledInput 
            type="text" 
            placeholder="Введите адрес доставки" 
            value={adress}
            onChange={(evt) => {
                setAdress(evt.target.value)
            } }></StyledInput>
            <Price>{price}</Price>
            <OrderButton onClick={handlerBuy} disabled={adress ? false : true}>Купить</OrderButton>
            {/* <button onClick={() => alert(adress)} disabled={adress ? false : true}>default button</button> */}
        </OrderBlock>
    )
}

export default SideOrder