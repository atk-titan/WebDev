import React from 'react'
import Child3 from './child3'
import Child4 from './child4'
import { Context } from './Context'

const Child1 = () => {
    const h1 = <h1>Hii there</h1>;


  return (
    <>
        <Context.Provider value={h1}>           //Provider step
            <div>Child1</div>
            <Child3 />
            <Child4 />
        </Context.Provider>
    </>
  )
}

export default Child1