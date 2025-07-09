import { Button, Container , TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

const App = () => {
  const socket = useMemo(()=> io("http://localhost:3000"),[]);

  const [ message , setMessage ] = useState("");

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log("connected",socket.id);
    });
    
    socket.on('welcome',(data)=>{
      console.log(data);
    });

    return ()=>{
      socket.disconnect();
    }
  },[]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    socket.emit('message', message);
    setMessage("");
  }

  return (
    <Container maxWidth="sm">
      <Typography variant='h1' component="div" gutterBottom>
        Welcome to the socket.io
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField value={message} id='outlined-basic' label="Outlined" variant='outlined' onChange={(e)=>setMessage(e.target.value)}></TextField>
        <Button type='submit' variant='contained' color='primary'>Send</Button>
      </form>
    </Container>
  );
}

export default App;