import { createStore ,combineReducers} from 'redux'
import reducer from './reducer/reducer'
import { persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"
import plus from './reducer/plus'
const persistConfig= {
  key: "root",
  storage: storageSession, // 사용할 스토리지를 정의해요.
  // whitelist: [], // 유지 할 데이터를 정의해요
  whiteList:['plus']
};

const rootReducer = combineReducers({
 plus
})

const perReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(perReducer);

export default store;