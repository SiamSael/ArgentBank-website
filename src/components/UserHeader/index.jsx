const UserHeader = (datas) => {
    return (
        <div className="header">
            <h1>Welcome back<br /> {datas.firstName} {datas.lastName}!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

export default UserHeader