import { useState } from "react";

export default function Note({note, onChange, onDelete}){

    let component;
    let [isEditing, setIsEditing] = useState(false);

    function handleChangeText(e){
        const newNote = {...note, text:e.target.value};
        onChange(newNote);
    }

    function handleChangeDone(e){
        const newNote = {...note, done:e.target.checked};
        onChange(newNote);
    }

    if(isEditing){
        component = (
            <>
                <input type="text" value={note.text} onChange={handleChangeText}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    }else{
        component= (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }


    return (
        <label>
            <input type="checkbox"  checked={note.done} onChange={handleChangeDone}/>
            {component}
            <button onClick={() => onDelete(note)}>Delete</button>
        </label>
    )

    

}