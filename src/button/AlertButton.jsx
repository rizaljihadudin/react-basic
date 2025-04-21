export default function AlertButton({text, msg}){

    function handleClick(){
        console.log(text)
        alert(msg)
    }

    return(
        <button onClick={handleClick}>{text}</button>
    )
    
}