import { useImmer } from "use-immer"


const ContactFormImer = () => {

    const initialData = {
        name: '',
        message: ''
    }

    const [contact, setContact] =  useImmer(initialData)

    const handleNameChange = (e) => {
        setContact(contact =>{
            contact.name = e.target.value
        })
    }

    const handleMessageChange = (e) => {
        setContact(contact => {
            contact.message = e.target.value
        })
    }

    return (
        <>
            <h1>Contact Form With Imer</h1>
            <form>
                <input type="text" placeholder="Input your name" value={contact.name} onChange={handleNameChange}/>
                <input type="text" placeholder="Input your message" value={contact.message} onChange={handleMessageChange} />
            </form>
            <br />
            <h1>Contact Detail</h1>
            <p>
                Nama : {contact.name}
                <br />
                Pesan : {contact.message}
            </p>
        </>
    )
}

export default ContactFormImer