import React, { useState } from 'react';

const Todos = (props) => {
    const clickhandler =async (todo) =>{
        const id=todo._id;
        const status=!todo.completed;

        await fetch("http://localhost:3000/completed",{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json', // Specify JSON format
            },
            body: JSON.stringify({
                "id":id,
                "status": status
            })
        });
        await props.fetchTodo();
    }

    return (
        <div>
            {   
                props.todos.map((todo)=>{
                    return(
                        <div>
                            <h1>{todo.title}</h1>
                            <h3>{todo.description}</h3>
                            <button onClick={()=>clickhandler(todo)} style={{color:todo.completed?"green":"red"}}>{todo.completed===true? "Completed ":"mark as completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    );
}
    
export default Todos;