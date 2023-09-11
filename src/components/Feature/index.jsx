const Feature = (Data) => {
    console.log(Data.img)
    return (
        <div className="feature-item" key={ Data.id }>
          <img
            src={ Data.img }
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">{ Data.title }</h3>
          <p>
            { Data.description }
          </p>
        </div>
    )
}

export default Feature