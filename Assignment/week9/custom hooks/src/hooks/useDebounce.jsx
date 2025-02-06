import React, { useEffect } from 'react';

const useDebounce = (input,time) => {
    useEffect(()=>{
        
        let id = setTimeout(()=>{
        //request for input
        },time);

        return ()=>{
            clearTimeout(id);
        }
    },[input,time]);
}

export default useDebounce;