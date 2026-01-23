import { useState } from 'react'

const Child = () => {
    const [value,setValue] = useState(0)

    const clickHandler = () => {
        setValue(value + 1)
    }
  return (
    <div style={{marginLeft:"1rem"}}>
        <button onClick={clickHandler} style={{marginTop:"2rem"}}>Click Me</button>
        <span> values : {value}</span>
    </div>
  )
}

export default Child