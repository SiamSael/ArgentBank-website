import Account from "../../components/Account";
import { useEffect } from 'react'
import { fetchProfil } from '../../features/profil'
import { useDispatch, useSelector } from 'react-redux'
import { selectProfil } from "../../utils/selectors";
import UserHeader from "../../components/UserHeader";


const User = () => {


    const profil = useSelector(selectProfil)
    let datasUser = profil.data

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchProfil)
    }, [dispatch])

    return (
        <main className="main bg-dark">
            <UserHeader {...datasUser} />
            <h2 className="sr-only">Accounts</h2>
            <Account />
        </main>
    )
}

export default User; 