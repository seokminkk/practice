import {combineReducers,legacy_createStore as createStore}from 'redux'

//리덕스는 named exports이다 defalut값이없다
const loginAction={type:'LOGIN'}
const anyAction={
  
}

const initialState={
  user:{
      isLogginIn:false,
      datat:null,
  },
  posts:[],
}

const reducer = combineReducers({
  user: (state,action)=>{
    switch (action.type){
      case 'LOGIN':
        return{
          isLogginIn:true,
          data:{
            nicname:'sekmin',
            password:12,
          }
        }
        
      default: 
      return state
    }

  
  },
  posts:(state,action)=>{
    if (Array.isArray(state)){
        switch(action.type){

        case 'ADD_POST':
          return[...state,action.data]
          default:
          return state;
        }
      }
    },
});

const store = createStore(reducer,initialState)