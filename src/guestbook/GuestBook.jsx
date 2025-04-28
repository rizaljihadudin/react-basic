import { useRef } from "react";
import { useState } from "react"
import GuestBookForm from "./GuestBookForm";

export default function GuestBook(){

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const nameInput = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        setName('');
        setMessage('');

        nameInput.current.focus();

        alert(`Name: ${name}, Message : ${message}`)
    }


    return(
        <>
            <h1>Guest Book</h1>
            <form>
                <GuestBookForm ref={nameInput} name={name} setName={setName}/>
                <br />
                <label htmlFor="message" style={
                    {
                        fontWeight:"bold"
                    }
                }>Message</label>
                <br />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}>
                </textarea>   
                <br />   
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}