import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import {useDispatch} from 'react-redux'
import {addPhoneNumber} from '../redux/reducer/PhoneBookReducer'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const ContactForm = () => {
const [name,setName]=useState<string>('')
const [phoneNumber,setPhoneNumber]=useState<string>('')
const dispatch=useDispatch()

// const list=useSelector((state : RootState)=>state.PhoneBookReducer.phoneNumberList)
// console.log('리스트',list)
const createPhoneNumber=()=>{

let phoneBook={
  name:name,
  number:phoneNumber
}
dispatch(addPhoneNumber({phoneBook}))
}



return (
  <div>
      <div  className={styles.container}>
        <label htmlFor='name'>이름</label>
        <input id='name' onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='이름'/> 
        <label htmlFor='phoneNumber'>전화번호</label>
        <input id='phoneNumber' onChange={(e)=>{setPhoneNumber(e.target.value)}}type='text' placeholder='전화번호'/>
        <button onClick={createPhoneNumber}>create</button>
      </div>
    </div>
  )
}

export default ContactForm