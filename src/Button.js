import React from "react"

function colorToCss(color) {
  switch (color) {
    case "red":
      return {
        backgroundColor: "#ff6186",
        borderColor: "#ff6186",
        color: "#fff",
      }
    default:
      return {
        backgroundColor:"#262c3a",
        borderColor:"#384258",
        color:"#fff",
      }
  }
}

export default function Button({children, onClick}) {
  return <button
    style={{
      border: "1px solid",
      cursor: "pointer",
      padding: "0.75em 0",
      overflow: "hidden"
    }}
    onClick={onClick}
  >
    {children}
  </button>
}
