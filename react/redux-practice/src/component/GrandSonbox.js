import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';





const GrandSonbox = () => {
  let count =useSelector(state=>state.count)
  return (
    <div>GrandSonbox{count}</div>
  )
}

export default GrandSonbox