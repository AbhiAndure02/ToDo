import Input from "./component/input";
import Box from "./component/Box";
import { useState } from "react";
function App() {
  const [todo, setToDo] = useState([]);
  const removeToDo =(id) => {
    const newTodo = todo.filter(
      (d, index) => {
        if(index !== id){
        return true;
        }else{
          return false;
        }

      }
    )
    setToDo(newTodo);
  }


  const addToDoHandler = (item) =>{
    setToDo(
      [
        ...todo,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )

  }



    return (
   <div className="bg-black  py-3">
    <div className=" rounded py-2 px-2 mx-auto max-w-[750px] min-h-[600px] shadow-2xl bg-white">
      <Input handler={addToDoHandler} />
      <Box val = {todo} removeHandler = {removeToDo}/>
    </div>
  </div>
  )
}
export default App;