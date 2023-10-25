import React, {useState} from "react";
import {
  StyledCheckbox,
  Label,
  CheckboxName,
  VisuallyHiddenInput,
} from "./styles";

function Checkbox({
  // labelComponent, // компонент для отображения label
  // selectValue, // выбранное значение
  // value, // значение
  // text, // текст элемента
  // onChange, // событие при изменении
  // props
  isChecked,
  children, // имя
  price,
}) {
  let productPrice = 0;

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);

    if(event.target.checked) {
      productPrice += price
      isChecked(productPrice)
    } else {
      productPrice -= price
      isChecked(productPrice)
    }
  }


  return (
    <>
      <Label>
        <CheckboxName>{children}</CheckboxName>
        <VisuallyHiddenInput type="checkbox" onChange={handleCheckboxChange}/>
        <StyledCheckbox></StyledCheckbox>
      </Label>
    </>
  );
}

export default Checkbox;
