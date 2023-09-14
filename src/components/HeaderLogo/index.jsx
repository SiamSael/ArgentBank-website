import { Link } from "react-router-dom"
import Logo from'../../img/argentBankLogo.png'

const HeaderLogo = () => {
    return (
        <Link className="main-nav-logo" to="/">
            <img className="main-nav-logo-image" src={ Logo } alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    )
}

export default HeaderLogo