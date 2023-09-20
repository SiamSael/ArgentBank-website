import { Navigate } from 'react-router-dom'
import { useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthentification } from '../../utils/selectors'
import { fetchOrUpdateAuthentification } from '../../features/authentification'

const Authentification = () => {

    const form = useRef()

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault(); 
        dispatch(fetchOrUpdateAuthentification(form.current.username.value, form.current.password.value))
    }
        
    const authentification = useSelector(selectAuthentification)

    if (authentification.data !== null) {
        return (<Navigate to="/user/" />)
    }
        
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form  id="authentification" method="post" onSubmit={(event) => handleSubmit(event)} ref={form}>
                    <span className="error-form">{authentification.status === 'rejected' ? 'Authentification rejected' : ''}</span>
                    <div className="input-wrapper">
                        <label htmlFor="username">Email</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <input type="submit" className="sign-in-button" value="Sign In"/>
                </form>
            </section>
      </main>
    )
}

export default Authentification