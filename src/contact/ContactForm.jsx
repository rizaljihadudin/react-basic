import {useState} from 'react'

export default function ContactForm() {

    const [contact, setContact] = useState({
        name:'',
        message:''
    });

    function handleNameChange(e){
        setContact({...contact, name: e.target.value});
    }

    function handleMessageChange(e){
        setContact({...contact, message: e.target.value});
    }

    return(
        <>
            <h1>Contact Form</h1>
            <form>
                <input type="text" value={contact.name} onChange={handleNameChange} placeholder='Input your name'/>
                <br />
                <textarea onChange={handleMessageChange} rows={5} cols={25} placeholder='Input your message'>{contact.message}</textarea>
            </form>
            <h1>Contact Detail</h1>
            <div>
                <p>Nama Saya adalah : {contact.name}, ini pesan saya {contact.message}</p>
            </div>
        </>
    )
}