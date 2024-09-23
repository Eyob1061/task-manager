
import "./../src/css/Profile.css"
import PropTypes from 'prop-types'
function Profile(props) {
  return (
    <div className="profile-wrapper">
      <img src="{props.imgeUrl"/>
      <h1 className="name">{props.name}</h1>
      <p>{props.bio}
     </p>
    </div>
  )

}

Profile.propTypes ={

  imgeUrl: PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  bio : PropTypes.string.isRequired

};

export default Profile
