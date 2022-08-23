
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector} from 'react-redux/es/exports';
import Box from './component/Box';
function App() {
  const dispatch=useDispatch();
  const count =useSelector(state=>state.count)
  const increase=()=>{
    dispatch({type:'increment',payload:{num:5}})
    
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>증가</button>
      <Box />
    </div>
  );
}

export default App;
