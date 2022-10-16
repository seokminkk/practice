import {createSlice} from '@reduxjs/toolkit'
 export interface phone{
  phoneNumberList:string[];
  keyword:string
}

let initialState:phone={
  phoneNumberList:[],
  keyword:''
};



// function reducer(state=initialState,action:string){


// }

const PhoneSlice=createSlice({
  name:'phonebook',
  initialState,
  reducers:{
    addPhoneNumber(state,action){
      // const abc=action.payload.phoneBook
      // state.phoneNumberList= [...state.phoneNumberList,{}]
      state.phoneNumberList.push(action.payload.phoneBook)
     
    },
    filterList(state,action){
      state.keyword=action.payload.keyWord
    }

  }
})

export const {addPhoneNumber,filterList}=PhoneSlice.actions
export default PhoneSlice.reducer