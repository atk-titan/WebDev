import React, { useEffect } from 'react'

const useInterval = (fn,time) => {
    useEffect(() => {
        const valid = setInterval(fn,time);

        return () => clearInterval(valid);
    },[fn,time]);
}

export default useInterval;