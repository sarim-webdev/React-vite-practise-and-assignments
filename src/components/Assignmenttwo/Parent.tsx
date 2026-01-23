import Child from "./Child"

const Parent = () => {
  const childrens = []

  for (let i = 0; i < 5; i++) {
    childrens.push(<Child  id={i} key = {i}/>)
  }
  return (
    <div>
      {childrens}
    </div>
  )
}

export default Parent