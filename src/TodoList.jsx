import TodoItem from "./TodoItem";


// eslint-disable-next-line react/prop-types
const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    return (
    <div>
        <ul className='list'>
            {todos.length === 0 && "No Todos 👻"}
            {todos.map (todo => {
            return (
                <TodoItem 
                // {...todo}
                id={todo.id} 
                completed={todo.completed} 
                title={todo.title} 
                key={todo.id} 
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
            );
        })}
        </ul>
    </div>
);
};

export default TodoList;
