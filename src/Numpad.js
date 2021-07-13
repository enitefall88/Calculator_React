import React, {useState} from "react"
import Button from "./Button";


export default function Numpad({
  onDigitButtonClick,
  onPointButtonClick,
  onAllClearButtonClick,
}) {
  return <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "1fr",
  }}>
    <Button onClick={() => onDigitButtonClick(7)}>
      7
    </Button>
    <Button onClick={() => onDigitButtonClick(8)}>
      8
    </Button>
    <Button onClick={() => onDigitButtonClick(9)}>
      9
    </Button>
    <Button onClick={() => onDigitButtonClick(4)}>
      4
    </Button>
    <Button onClick={() => onDigitButtonClick(5)}>
      5
    </Button>
    <Button onClick={() => onDigitButtonClick(6)}>
      6
    </Button>
    <Button onClick={() => onDigitButtonClick(1)}>
      1
    </Button>
    <Button onClick={() => onDigitButtonClick(2)}>
      2
    </Button>
    <Button onClick={() => onDigitButtonClick(3)}>
      3
    </Button>
    <Button onClick={() => onDigitButtonClick(0)}>
      0
    </Button>
    <Button onClick={onPointButtonClick}>
      .
    </Button>
    <Button color="red" onClick={onAllClearButtonClick}>
      AC
    </Button>
  </div>
}
