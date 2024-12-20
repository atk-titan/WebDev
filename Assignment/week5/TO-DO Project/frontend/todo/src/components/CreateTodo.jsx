import React, { useState } from 'react';

const CreateTodo = (props) => {

    const [title,setTitle]= useState("");
    const [description,setdescription] = useState("");

    const clickHandler=async ()=>{
        await fetch("http://localhost:3000/todo",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Specify JSON format
            },
            body: JSON.stringify({
                "title":title,
                "description":description
            })
        });
        await props.fetchTodo();
    }
    return (
        <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
            <input style={{padding:"13px",margin:"20px",}} type="text" placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)}/>
            <input style={{padding:"13px",margin:"20px",}} type="text" placeholder='Enter Description' onChange={(e)=>setdescription(e.target.value)}/>
            <button style={{width:"200px",padding:"13px",margin:"20px",}} onClick={clickHandler}>add task</button>
        </div>
    );
}
    
export default CreateTodo;