import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="list-container">
      <li className="list-item-1">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item-2">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
