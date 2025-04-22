import { useState } from "react";

export default function TaskForm({setItems}){
    const [task, setTask] = useState('');

    function handleTaskChange(e){
        setTask(e.target.value);
    }

    function handleClick(e){
        e.preventDefault()
        setItems((draft) => {
            draft.push(task);
        })

        setTask('');
    }
    return(
        <>
            <h1>Create Task</h1>
            <form>
                <input type="text"  onChange={handleTaskChange} value={task}/>
                <button onClick={handleClick}>Add</button>
            </form>
        </>
    )
}