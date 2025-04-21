import './HelloWorld.css'

function HelloWorld() {
    const props = {
        text :"Ini Adalah Props",
        name : "Asep Balon"
    }
    return(
        <>
            <div>
                <HeaderHelloWorld
                    {...props}
                />
                <ParagraphHelloWorld/>
            </div>
        </>
    )
}

function HeaderHelloWorld({text = 'Test, Hello World', name}) {
    return(
        <>
            <h1 className='title'>{text.toUpperCase()}</h1>
            <h6>Created By : {name}</h6>
        </>
    )
}

function ParagraphHelloWorld() {
    const text = 'Selamat Belajar React JS';
    const style = {
        color: 'blue',
        backgroundColor: 'yellow',
        fontSize: '20px'
    }
    return(
        <p style={style}>{text.toLowerCase()}</p>
    )
}

export default HelloWorld

