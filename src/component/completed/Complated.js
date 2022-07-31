const Complated = (item, todos, setTodos) => {
    const { id, isComleted } = item

    const handleAllBtn = (todoId) => {
        if (todos.length === 0) {
            const findedTodo = todos.find(e => e.id === todoId)
            findedTodo.isComleted = findedTodo.length
        }
    }
    return (
        <div className="d-flex justify-content-center">
            <button onClick={() => handleAllBtn(id)} className="btn btn-success mx-2">All: <span></span></button>
            <button className="btn btn-warning mx-2">UnCompleted</button>
            <button className="btn btn-info mx-2">Completed</button>
        </div>
    )
}

export default Complated