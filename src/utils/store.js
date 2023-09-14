import {configureStore} from '@reduxjs/toolkit'
import authentificationReducer from '../features/authentification'
import profilReducer from '../features/profil'


export default configureStore({
    reducer: {
      authentification: authentificationReducer,
      profil: profilReducer,
    },
})