import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const logoutOnClick = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button onClick={logoutOnClick} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
