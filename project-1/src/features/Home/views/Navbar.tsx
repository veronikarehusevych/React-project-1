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
            <a href="/products" className={'nav-link'}>
              Features
            </a>
          </li>
          <li>
            <a href="/about" className={'nav-link'}>
              Benefits
            </a>
          </li>
          <li>
            <a href="/contact" className={'nav-link'}>
              Pricing
            </a>
          </li>
          <li>
            <a href="/about" className={'nav-link'}>
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className={'nav-link'}>
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className={'navbar-button'}>
          <span className="btn-swap__label">
            <span className="btn-swap__text btn-swap__text--top">Try Dreelio free</span>
            <span className="btn-swap__text btn-swap__text--bottom">Try Dreelio free</span>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
