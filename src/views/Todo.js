const Todo = (props) => {
    const { todos } = props;
    const handleOnleDelete = (id) => {
        props.handleOnleDeleteApp(id)
    }
    return (
        <div className='todos-container'>
            <div className="title">{props.title}</div>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <li className='todo-child'>{todo.title} <span onClick={() => handleOnleDelete(todo.id)}>X</span></li>

                    </div>
                );
            })}
            <hr />
        </div>
    );

}
export default Todo;