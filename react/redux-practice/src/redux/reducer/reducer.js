let initialState={
  count:0
}

function reducer(state=initialState,action){
  // console.log(action)
  if(action.type==='increment'){
    return{...state,count:state.count+action.payload.num}
  }
  return{...state};
}
export default reducer;