import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import GrandSonbox from './GrandSonbox'
const Box = () => {
  let count=useSelector(state=>state.count)
  return (
    <div>
      Box{count}
    <GrandSonbox/>
    </div>

  )
}

export default Box