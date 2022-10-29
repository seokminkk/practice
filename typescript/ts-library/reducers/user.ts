import{Reducer}from 'redux'
import{LoginSuccessAction,LogoutAction,LoginSuccessData, LoginRequestAction} from '../actions/user'

interface InitialState{
    isLoggingIn:boolean,
    loading:boolean,
    data:LoginSuccessData|null
}
const initialState = {
  isLoggingIn: false,
  loading:false,
  data: null,
};

type UserReducerActions=LoginSuccessAction|LogoutAction|LoginRequestAction;
const userReducer :Reducer<InitialState/*typeof initialState는 바로위initialState가 data가 null로잡혀있어서 새로만들어줘얗마 */ ,UserReducerActions>= (prevState = initialState, action) => { // 새로운 state 만들어주기
  switch (action.type) {
      case 'LOG_IN_REQUEST':
          return{
            ...prevState,
            loading:true
            }
      case 'LOG_IN_SUCCESS':
          return {
              ...prevState,
              loading:false,
              data: action.data,
          };
      case 'LOG_OUT':
          return {
              ...prevState,
              data: null,
          };
      default:
          return prevState;
  }
};

export default userReducer;