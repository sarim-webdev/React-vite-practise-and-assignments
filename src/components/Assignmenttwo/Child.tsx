import { useState } from 'react'

const Child = (props) => {
    const [value,setValue] = useState(0)

    const clickHandler = () => {
        setValue(value + 1)
    }
  return (
    <div style={{marginLeft:"1rem"}}>
        <button onClick={clickHandler} style={{marginTop:"2rem"}}>Click Me</button>
        <span> values : {value} id : {props.id}</span>
    </div>
  )
}

export default Child