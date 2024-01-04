import Item from "./Item"

export default function Box(props) {
  const item = props.val.map(
    (single, index) => {
      return <>
      <Item removeHandler = {props.removeHandler} key = {index} item ={single.item} id ={index} time = {single.time}></Item>
      </>

    }

  )
  return (
    <div>
       {item}
      
    </div>
  )
}
