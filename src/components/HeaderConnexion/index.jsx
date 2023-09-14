import { Link } from "react-router-dom"

const HeaderConnexion = () => {
    return (
        <Link className="main-nav-item" to="/sign-in/">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
        </Link>
    )
}

export default HeaderConnexion