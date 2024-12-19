import './index.css'


const UserProfile = props => {
  const {listOfEmployee} = props
  const {imageUrl, name, role} = listOfEmployee

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
    </li>
  )
}

export default UserProfile
