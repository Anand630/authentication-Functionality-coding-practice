import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-page-container">
      <h1 className="home-heading">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
