import  { useEffect, useState } from 'react'

const Counterassignment = () => {
    const [value,setValue] = useState(0)
    const [valueReached,setReachedValue] = useState(false)

    const buttonHandler = () => {
        setValue(value + 1)
    }
    const buttonHandler2 = () => {
        setValue(value - 1)
    }
    const buttonHandler3 = () => {
        setValue(0)
    }
    useEffect(()=>{
        if(value == 10){
            setReachedValue(true)
            setTimeout(() => {
            setValue(0);
            setReachedValue(false);
          }, 1000)
        }
    },[value])
  return (

    <div style={{height:"100vh",width: "100vw",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",color:"black",flexDirection:"column"}}>
    <h1 style={{marginBottom:"1rem"}}>{value}</h1>
    {valueReached ? <div>Value reached</div> : <div>Value remanings</div>}
    <button onClick={buttonHandler} style={{backgroundColor:"pink",padding:"1rem 2rem",marginBottom:"1rem",marginTop:"1rem"}}>Add</button>
    <button onClick={buttonHandler2} style={{backgroundColor:"pink",padding:"1rem 2rem",marginBottom:"1rem"}}>Sub</button>
    <button onClick={buttonHandler3} style={{backgroundColor:"pink",padding:"1rem 2rem",marginBottom:"1rem"}}>Reset</button>
    </div>
  )
}

export default Counterassignment