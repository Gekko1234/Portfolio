import './FooterComponent.css'
import { BsHouse } from '../../node_modules/react-icons/bs'
import { FiPhoneCall } from '../../node_modules/react-icons/fi'
import { IoMdPerson } from '../../node_modules/react-icons/io'
import { FaGithub, FaLinkedin } from '../../node_modules/react-icons/fa';
import { Link } from 'react-router-dom';

function FooterComponent() {
  return (
    <div className='footerDiv'>
        <div className='links'>
           
            <Link to="/#homeDiv"><h3> <span className='footerIcon'><BsHouse /> </span> Home</h3></Link>
            <a href='#aboutMeDiv'><h3> <span className='footerIcon'><IoMdPerson /> </span> About Me</h3></a>
            <Link className="lastNav" to="/contact"> <h3> <span className='footerIcon'><FiPhoneCall /> </span>Contact</h3></Link>
        </div>
        
        <div className='links2'>
        <a className='logoFooter' href="https://www.linkedin.com/in/german-melguizo" target="_ blank"> <FaLinkedin></FaLinkedin> </a>
        <a className='logoFooter2' href="https://github.com/Gekko1234" target="_ blank"> <FaGithub></FaGithub> </a>
        </div>
    </div>
  )
}

export default FooterComponent