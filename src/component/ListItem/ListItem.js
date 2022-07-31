
const ListItem = ({ children, item, todos, setTodos }) => {
    const { id, isComplated } = item

    const handleDeleteTodo = (todoId) => {
        const filteredTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(filteredTodos);
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleEditTodo = (todoId) => {
        const editText = prompt("Textni kiriting")
        const findedTodo = todos.find(e => e.id === todoId)
        findedTodo.text = editText;
        setTodos([...todos])
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }

    const handleChangeTodo = (todoId) => {
        const findedTodo = todos.find(e => e.id === todoId)
        findedTodo.isComplated = !findedTodo.isComplated;
        setTodos([...todos])
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }

    return (
        <li className=" mt-3 mb-2 d-flex align-items-center justify-content-center ">
            <span>id:{id}</span>
            <input onChange={() => handleChangeTodo(id,)} defaultChecked={isComplated} className="mx-3 form-check-input" type="checkbox" />
            <span className={isComplated ? "text-decoration-line-through mx-3" : "mx-3"}>{children}</span>
            <button onClick={() => handleEditTodo(id)} className="btn btn-outline-success mx-3">Edit</button>
            <button onClick={() => handleDeleteTodo(id)} className="btn btn-outline-danger">Remove</button>
        </li>

    )
}

export default ListItem