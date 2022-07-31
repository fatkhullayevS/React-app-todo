import List from "./component/List/List";
import ListItem from "./component/ListItem/ListItem";
import Header from "./component/header/header";
import { useState } from 'react'
import Complated from "./component/completed/Complated";


function App() {

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])

  const handleInputValue = (evt) => {
    if (evt.code === "Enter") {
      console.log(evt.target.value)
      let newTodo = {
        id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
        text: evt.target.value,
        isComplated: false
      }
      setTodos([...todos, newTodo]);
      evt.target.value = null
    }
  }
  window.localStorage.setItem("todos", JSON.stringify(todos))
  return (
    <div className="App">
      <Header />
      <div className="container">
        <input className="form-control w-75 mx-auto" onKeyUp={handleInputValue} type="text" placeholder="Typing..." />
        {
          todos.length && <List>
            {
              todos.map(e => (
                <ListItem todos={todos} setTodos={setTodos} key={e.id} item={e} > {e.text}</ListItem>
              ))
            }
          </List>
        }
        <Complated />
      </div>
    </div>
  );
}

export default App;
