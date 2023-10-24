import React from "react";
import {
  StyledCheckbox,
  Label,
  CheckboxName,
  VisuallyHiddenInput,
} from "./styles";

function Checkbox({
  // labelComponent, // компонент для отображения label
  // selectValue, // выбранное значение
  children, // имя
  price,
  // value, // значение
  // text, // текст элемента
  // onChange, // событие при изменении
  // props
}) {
  // console.log(props)
  return (
    <>
      <Label>
        <CheckboxName>{children}</CheckboxName>
        <VisuallyHiddenInput type="checkbox" />
        <StyledCheckbox></StyledCheckbox>
      </Label>
    </>
  );
}

export default Checkbox;
