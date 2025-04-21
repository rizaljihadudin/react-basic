
import Todo from './Todo.jsx'
function TodoList() {

    const data = [
        {id: 1, text: 'Belajar React', isCompleted: true},
        {id: 2, text: 'Belajar HTML', isCompleted: true, isDeleted: true},
        {id: 3, text: 'Belajar NODE', isCompleted: false},
        {id: 4, text: 'Belajar Flutter', isCompleted: false},
        {id: 5, text: 'Belajar PHP', isCompleted: true},
    ]

    // const todos =  data.map((todo) => <Todo key={todo.id} {...todo}/>)
    return(
        <>
            <h1>Todo List</h1>
            <ul>
                {data.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList