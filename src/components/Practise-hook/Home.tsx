import { useEffect, useState } from "react"
import Children from "./Children"


// isValueReached ya UI par dikhata hai
// setValueReached ya value update ka kam karta hai
const Home = () => {
    const [value, setValue] = useState(1)
    const [value2, setValue2] = useState(1)
    const [isValueReached, setValueReached] = useState(false)

    const valueBtnChange = () => {
        setValue(value + 1)
    }

    const valueBtnChange2 = () => {
        setValue2(value2 + 1)
    }

    useEffect(() => {
        if (value >= 10) {
            setValueReached(true)
        }
    }, [value])

    console.log("parent re-render")

    return (
        <div>
            {isValueReached && (<div style={{ textAlign: "center", color: "pink" }}>Value is reached</div>)}
            <Children />
            <button onClick={valueBtnChange}style={{ padding: "1rem", marginLeft: "2rem", background: "pink" }}>Click Me {value}</button>
            <button onClick={valueBtnChange2} style={{ padding: "1rem", marginLeft: "2rem", background: "pink" }}>Click Me A {value2}</button>
        </div>
    )
}

export default Home
