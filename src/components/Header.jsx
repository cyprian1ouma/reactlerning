import './Headerfooter.css';
function Header() {
  return (
    <div>
        <h1 className='welcome'>Welcome to React Training</h1>
        <nav className="navbar">
          <ul >
            <li className='active'>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
        
    </div>
  )
}


export default Header;
