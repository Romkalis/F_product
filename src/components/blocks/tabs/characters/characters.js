import React from 'react'
import {StyledChar} from './styles'

function Characters ({charachter}) {

    return (
        <>
        <StyledChar><b>Масса:</b> {charachter.weight}.</StyledChar>
        <StyledChar><b>Срок годности:</b> {charachter.beforeDate}</StyledChar>
        <StyledChar><b>Порода:</b> {charachter.breed}</StyledChar>
        <StyledChar><b>Место происхождения:</b> {charachter.bornIn}</StyledChar>
        </>
    )
}

export default Characters