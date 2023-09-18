import { createSlice } from '@reduxjs/toolkit'
import { selectAuthentification } from '../utils/selectors'

// Le state initial de la feature
const initialState = {
    status: 'void',
    data: null,
    error: null,
}

const { actions, reducer } = createSlice({
    name: 'authentification',
    initialState,
    reducers: {
        // fetching action & reducer
        fetching: (draft) => {
            if (draft.status === 'void') {
                // on passe en pending
                draft.status = 'pending'
                return
            }
            // si le statut est rejected
            if (draft.status === 'rejected') {
                // on supprime l'erreur et on passe en pending
                draft.error = null
                draft.status = 'pending'
                return
            }
            // si le statut est resolved
            if (draft.status === 'resolved') {
                // on passe en updating (requête en cours mais des données sont déjà présentent)
                draft.status = 'updating'
                return
            }
            // sinon l'action est ignorée
            return
        },
        // resolved action & reducer
        resolved: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en resolved et on sauvegarde les données
                draft.data = action.payload
                draft.status = 'resolved'
                return
            }
            // sinon l'action est ignorée
            return
        },
        // rejected action & reducer
        rejected: (draft, action) => {
            // si la requête est en cours
            if (draft.status === 'pending' || draft.status === 'updating') {
                // on passe en rejected, on sauvegarde l'erreur et on supprime les données
                draft.status = 'rejected'
                draft.error = action.payload
                draft.data = null
                return
            }
            // sinon l'action est ignorée
            return
        },

        reset(draft)  {
            //deleteToken()
            draft.status = 'void'
            draft.error = null
            draft.data = null
            return
        },
    },
})

export function fetchOrUpdateAuthentification(username, password) {
    return async (dispatch, getState) => {
        const status = selectAuthentification(getState()).status
        if (status === 'pending' || status === 'updating') {
          // on stop la fonction pour éviter de récupérer plusieurs fois la même donnée
          return
        }
        dispatch(actions.fetching())
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: username, password: password })
            };
            // on utilise fetch pour faire la requête
            const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions)
            const data = await response.json()
            dispatch(actions.resolved(data.body.token))
            //setToken(data.body.token)
        } catch (error) {
            dispatch(actions.rejected(error))
        }
    }
}
/*
function setToken(token) {
    window.localStorage.setItem("authentification_token", token);
}

function deleteToken() {
    window.localStorage.removeItem("authentification_token");
}
*/
export function resetConnexion(dispatch) {
    dispatch(actions.reset())
}

export default reducer