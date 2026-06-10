import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav id="nav-bar" className="navbar col-12 rectangle d-flex justify-content-between align-items-center">
      <div id="logo">
        <Link to="/"><span>MADHURI BHAVANA</span></Link>
      </div>
      <div id="nav-items" className="col-9 d-flex justify-content-end align-items-center">
        <div className="nav-item col-1">
          <Link to="/#introduction-block">WORK</Link>
        </div>
        <div className="nav-item col-1">
          <a href="/resume/Madhuri Bhavana.pdf" target="_blank" rel="noreferrer">RESUME</a>
        </div>
        <div className="nav-item col-1">
          <a href="#footer-block">CONTACT</a>
        </div>
      </div>
    </nav>
  )
}
