import {configureStore} from '@reduxjs/toolkit'
import authentificationReducer from '../features/authentification'
import profilReducer from '../features/profil'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  profil: profilReducer,
  authentification: authentificationReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      }
    }),
})

export const persistor = persistStore(store)