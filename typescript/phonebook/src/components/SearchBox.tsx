import React, { useState } from 'react'
import styles from './SearchBox.module.css'
import {filterList} from '../redux/reducer/PhoneBookReducer'
import { useDispatch } from 'react-redux'

const SearchBox = () => {
  const [keyWord,setKeyWord]=useState('')
  const dispatch=useDispatch()
  const searchKey=()=>{
 dispatch(filterList({keyWord}))
  }

  return (
    <div>
      <input onChange={(e)=>{setKeyWord(e.target.value)}} placeholder='이름을 입력 하세요'/> <button onClick={searchKey}>검색</button>
    </div>
  )
}

export default SearchBox