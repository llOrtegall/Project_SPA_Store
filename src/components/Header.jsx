import './Header.css'

export const Header = () => {
  return (
    <nav className="navMain">
      <figure>
        <img className='logo' src=".\src\assets\casa.png" alt="foto" width={38} />
      </figure>
      <ul className="flex gap-6 items-center">
        <li><a href="#" className="listNav">Home</a></li>
        <li><a href="#" className="listNav">About</a></li>
        <li><a href="#" className="listNav">Contact</a></li>
        <li><a href="#" className="listNav">Login</a></li>
      </ul>
    </nav>
  )
}