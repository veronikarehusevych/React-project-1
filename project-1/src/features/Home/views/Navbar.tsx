import '../styles/Navbar.css'
import logo from '../../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className={'header'}>
          <img src={logo} className="logo" alt="App Logo" />
          Dreelio
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Features</a>
          </li>
          <li>
            <a href="/about">Benefits</a>
          </li>
          <li>
            <a href="/contact">Pricing</a>
          </li>
          <li>
            <a href="/about">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Try Dreelio free</button>
      </div>
    </nav>
  )
}

export default Navbar
