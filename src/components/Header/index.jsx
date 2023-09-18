import HeaderLogo from "../HeaderLogo";
import HeaderConnexion from "../HeaderConnexion";
import { selectProfil } from "../../utils/selectors";
import { useSelector } from 'react-redux'

const Header = () => {

    const profil = useSelector(selectProfil)
    let datasUser = profil.data

    return (
        <nav className="main-nav">
            <HeaderLogo />
            <HeaderConnexion {...datasUser} />
        </nav>
    )
}

export default Header