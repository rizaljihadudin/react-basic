import { useState } from "react";
import { useImmer } from "use-immer";


export default function Task(){

    const [task, setTask] = useState('');
    const [items, setItems] = useImmer([]);

    /** Jikad Menggunakan useState */
    //const [items, setItems] = useState([]);

    function handleTaskChange(e){
        setTask(e.target.value);
    }

    function handleClick(e){
        e.preventDefault()
        console.log(task);
        setItems((draft) => {
            draft.push(task);
        })
        
        /** Jika Menggunakan useState */
        //setItems([...items, task]);

        setTask('');
    }

    return(
        <>
            <h1>Create Task</h1>
            <form>
                <input type="text"  onChange={handleTaskChange} value={task}/>
                <button onClick={handleClick}>Add</button>
            </form>
            <h1>List Task</h1>
            <ul>
                {items.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </>
    )
}