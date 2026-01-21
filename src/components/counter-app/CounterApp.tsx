import { useEffect, useState } from 'react'

const Counterapp = () => {
    const [addValue,setAddValue] = useState(0)
    const [subValue,setSubValue] = useState(0)
    const [reachedValue,setReachedValue] = useState(false)

    const buttonHandler = () =>{
        setAddValue(addValue + 1)
    }
    const buttonHandler2 = () =>{
        setSubValue(subValue - 1)
    }

    useEffect(() => {
      if(addValue == 10){
        setReachedValue(true)
        setAddValue(0)
        setSubValue(0)
      }
    },[addValue])
  return (
    <div>
    { reachedValue && <h3 style={{marginLeft:"1rem"}}>Value is reached</h3>}
    <button onClick={buttonHandler}  style={{marginLeft:"1rem"}}>Add Values {addValue}</button>
    <button onClick={buttonHandler2} style={{marginLeft:"1rem"}}>Sub Values {subValue}</button>
    </div>
  )
}
export default Counterapp