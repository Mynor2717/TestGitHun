import Todo from "./Todo";

const Todos = ({todos, deleteTodo, updateTodo}) => { 
    return (
        <div className="mt-5">
            <h2 className="text-center">Por Hacer</h2> 
            <ul className="list-group">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                ))}
                
                    {todos.length === 0 && (
                        <li className="list-group-item text-center">Nada por hacer</li>
                  )}
                
            </ul>
        </div>
    )
}

export default Todos;