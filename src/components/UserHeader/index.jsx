import { Link } from "react-router-dom"

const UserHeader = (datas) => {
    return (
        <div className="header">
            <h1>Welcome back<br /> {datas.firstName} {datas.lastName}!</h1>
            <Link className="edit-button" to="/edit-name/">Edit Name</Link>
        </div>
    )
}

export default UserHeader