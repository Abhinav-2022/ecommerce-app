import React from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'

const LatestCollection = () => {

    const {produts} = useContext(Shopcontext);
  return (
    <div>LatestCollection</div>
  )
}

export default LatestCollection