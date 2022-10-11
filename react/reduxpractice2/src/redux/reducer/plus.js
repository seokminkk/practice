
let initialState={
  userinfo:[],
 
}


function plus(state=initialState,action){
 console.log(action)
  if(action.type==='DUMMY'){
   return{...state,userinfo:action.payload.dummyData}
  }
  if(action.type==='PLUS'){
    
    return{...state,userinfo:state.userinfo.map((el)=>{
      let abc=el.age+=1
      let hij=el.name
      let efg={name:hij,age:abc}
      return      efg
    }
     
    )} 
  }

  return state;
}
export default plus;