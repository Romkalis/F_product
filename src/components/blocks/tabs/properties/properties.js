import React from 'react'
import {StyledProperties} from './styles'

function Properties ({properties}) {
    console.log(properties)
    return (
        <>
        <StyledProperties>
            <b>Энергетическая ценность:</b> {properties.energy}

        </StyledProperties>
        <StyledProperties>
            <b>Пищевая ценность:</b> {properties.nutritionalValue}


        </StyledProperties>
        </>
    )
}

export default Properties