import {React} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () =>{

  return(
    <header className='navbar'>
    <div className='navbar__title navbar__item'>
      <Link to="/">IPL Dashboard</Link>
    </div>
    {/* <div className='navbar__item'>About Us</div>
    <div className='navbar__item'>Contact</div>
    <div className='navbar__item'>Help</div>         */}
  </header>
  ) 

}