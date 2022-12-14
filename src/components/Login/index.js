import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }

  const authenticateUser = async () => {
    const userCredentials = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      Cookies.set('jwt_token', data.jwt_token, {expires: 15})
      const {history} = props
      history.replace('/')
    }
  }
  return (
    <div className="login-page-container">
      <h1 className="please-login-heading">Please Login</h1>
      <button onClick={authenticateUser} type="button" className="login-button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
