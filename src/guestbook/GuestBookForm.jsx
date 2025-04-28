export default function GuestBookForm({ref, name, setName}){
    return(
        <>
            <label htmlFor="name" style={
                {
                    fontWeight:"bold"
                }
            }>Name</label>
            <br />
            <input type="text" ref={ref} value={name} onChange={(e) => setName(e.target.value) } />
        </>
    )
}