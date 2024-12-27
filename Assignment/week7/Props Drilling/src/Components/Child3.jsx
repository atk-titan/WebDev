import React, { useContext } from 'react'
import { Context } from './Context';

const Child3 = () => {
    const c = useContext(Context);

  return (
    <>
        <div>child3</div>
        {c}
    </>
  )
}

export default Child3