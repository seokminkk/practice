import React from 'react'
import styles from './ContactItem.module.css'
import { phone } from '../redux/reducer/PhoneBookReducer';
export interface abc{
  item:{name:string,
  number:string}

}

const ContactItem = ({item}:abc) => {
  // {console.log('이거뭐냐',item)}
  return (
    <div className={styles.container}>
      <img className={styles.profile_img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg' alt='프로필이미지'/>
      <div className={styles.textContainer}>
        <div>{item.name}</div>
        <div>{item.number}</div>
      </div>
    </div>
  )
}

export default ContactItem