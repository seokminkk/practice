
import './App.css';
import { useDispatch, useSelector} from 'react-redux/es/exports';
import { useEffect } from 'react';

const dummyData=[
  {name:'김야긴', age:29},
  {name:'홍석민', age:27},
  {name:'박세현', age:26},
]
function App() {
  const dispatch=useDispatch();
  const userinfo=useSelector(state=>state.plus.userinfo)

useEffect(()=>{
  setting()
},[])

  const setting=()=>{
 dispatch({type:'DUMMY',payload:{dummyData}})
}  

const add=()=>{
  dispatch({type:'PLUS',})
}

  return (
    <div>
       유저정보{userinfo?.map(el=>{
        return(
          <div key={el?.name}>
            {el?.name}
            {el?.age}
            
          </div>
        )
       })}
        {console.log('렌더링userinfo',userinfo)}
     
     

       <button onClick={add}>더하기</button>
    
    </div>
  )

}

export default App;
