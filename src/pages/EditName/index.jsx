
import { useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { UpdateUserName } from "../../features/profil"
import { selectProfil } from "../../utils/selectors"

const EditName = () => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault(); 
        dispatch(UpdateUserName(form.current.newUserName.value))
    }

    const profil = useSelector(selectProfil)

    const form = useRef()

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Edit Name</h1>
                <form  id="editName" method="put" onSubmit={(event) => handleSubmit(event)} ref={form}>
                    <span className="error-form">{profil.status === 'rejected' ? "Oops : failed request" : ''}</span>
                    <div className="input-wrapper">
                        <label htmlFor="newUserName">New Username</label>
                        <input type="text" id="newUserName" />
                    </div>
                    <input type="submit" className="sign-in-button" value="submit"/>
                </form>
            </section>
      </main>
    )
}

export default EditName