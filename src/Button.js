export React from "react"


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
