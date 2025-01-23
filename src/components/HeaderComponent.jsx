import './HeaderComponent.css'
import logo from '../assets/images/logo3PNG.png'
import { FaGithub, FaLinkedin } from '../../node_modules/react-icons/fa';
import { Link } from 'react-router-dom';
import Contact from '../Contact';


function HeaderComponent(props) {
 
  const {links} = props;

  return (
    <header id="Home">

        <div className="logo">
          <img className="logoNav" src={logo} alt="logoGMP" /> 
        </div> 

        <nav className="nav">
        <Link to="/#homeDiv">{links.home}</Link>
        <a href="#aboutMeDiv">{links.aboutMe}</a>
        <a href="#proyectDiv">{links.proyects}</a>
        <Link className="lastNav" to="/contact">{links.contact}</Link>





          <a className='lastLogo' href="https://www.linkedin.com/in/german-melguizo" target="_ blank"> <FaLinkedin></FaLinkedin> </a>
          <a className='logo' href="https://github.com/Gekko1234" target="_ blank"> <FaGithub></FaGithub> </a>
        </nav>
    
    </header>
  )
}

export default HeaderComponent