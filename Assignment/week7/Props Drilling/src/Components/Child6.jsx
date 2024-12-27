import React, { useContext } from 'react';
import { Context } from './Context';


const Child6 = () => {
    const c = useContext(Context);

  return (
    <>
        <div>Child6</div>
        {c}
    </>
  );
}

export default Child6;