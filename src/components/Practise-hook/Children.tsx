import { memo, useState } from "react"

const Children = () => {
    const [value3, setValue3] = useState(0)

    const childrenUpdateValue = () => {
        setValue3(value3 + 1)
    }
    console.log( "=== Children re-render")
    return (
        <button onClick={childrenUpdateValue} style={{ padding: "1rem", marginLeft: "2rem", background: "pink" }}>Children Update Value {value3}</button>
    )
}

export default memo(Children)

// memo ka matlab hai ka ya jab tak update nahi karin gai tab tak children re-render nahi hoga 