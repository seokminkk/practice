import React from 'react';
import styles from './App.module.css'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
function App() {
  return (
    <div >
      <h1 className={styles.title}>연락처</h1>

      <div className={styles.container}>
          <div>전화번호입력<ContactForm /> </div>
          <div> 검색창<ContactList /></div>
      </div>
    </div>
  );
}

export default App;
