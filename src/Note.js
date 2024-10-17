import React,{useState} from 'react'


const Note = () => {
    const[note,setNote]=useState('')
    const handleChange=(event)=>{
        setNote(event.target.value)
    }
  return (
    <div>
        <h1>Simple Note</h1>
        <textarea placeholder='Write your note..' value={note} onChange={handleChange}/>
        {
            note ? (<p>Your note: {note}</p>):(<p>Please write a note</p>)

        }
    </div>
  )
}

export default Note