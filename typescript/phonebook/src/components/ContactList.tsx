import React, { useEffect, useState } from 'react'
import styles from './ContactList.module.css'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { phone } from '../redux/reducer/PhoneBookReducer';

// interface Item {
// name:string,
// number:string
// }
interface PlaceProps {
  item: {
    name: string;
    number: string;
  };
  
}
const ContactList = () => {
  // const list  =useSelector((state: RootState )=>state.persistedReducer.phoneNumberList)
  // const keyWord=useSelector((state: RootState )=>state.PhoneBookReducer.keyword)
  const list  =useSelector((state: RootState )=>state.persistedReducer.phoneNumberList)

  const keyWord=useSelector((state: RootState )=>state.persistedReducer.keyword)
  const [filterList,setFilterList]=useState<string[]>(list)

useEffect(()=>{
if(keyWord!==''){
  let fliteredList = list.filter((item:any) => item.name.includes(keyWord));
  setFilterList(fliteredList)
}else{
  setFilterList(list)
}

},[keyWord,list])


  return (
    <>ContactList
    {/* {console.log('리스트',list)} */}
        <SearchBox/>
        {filterList.map((item:any)=>(
      <ContactItem item={item}/>
        ))}
    </>
  )
}

export default ContactList