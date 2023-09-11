import { Link } from "react-router-dom"
import Logo from'../../img/argentBankLogo.png'

const Header = () => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={ Logo } alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <Link className="main-nav-item" to="/sign-in/">
                <i className="fa fa-user-circle"></i>
                <p>Sign In</p>
            </Link>
        </nav>
    )
}

export default Header