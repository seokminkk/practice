import {configureStore} from '@reduxjs/toolkit'
import PhoneBookReducer from './reducer/PhoneBookReducer'
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
 
  storage:storageSession,
  whiteList:['PhoneBookReducer']

};
const persistedReducer = persistReducer(persistConfig, PhoneBookReducer);

let store =configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
})

export default store

export type RootState = ReturnType<typeof store.getState> 