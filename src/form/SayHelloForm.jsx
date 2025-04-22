export default function SayHelloForm(){

    function handleClick(e){
        e.preventDefault()
        const name = document.getElementById('input_name').value;
        document.getElementById('output_name').innerText = `Hello, My Name Is ${name}`;
    }

    function handleRefresh(e){
        e.preventDefault();
        document.getElementById('input_name').value = '';
        document.getElementById('output_name').innerText = `Hello World`;
    }

    return(
        <>
            <input type="text" id="input_name" />
            <button onClick={handleClick}>Say Hello</button>
            <button onClick={handleRefresh}>Refresh</button>
            <h1>
                <div id="output_name">Hello World</div>
            </h1>
        </>
    )
}