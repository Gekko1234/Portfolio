import './AboutMeMainComponent.css'
import img from '../assets/images/yo1.2.png'
import logoJava from '../assets/images/java.png'
import logoPHP from '../assets/images/php.png'
import logoJS from '../assets/images/js.png'
import logoReact from '../assets/images/react.png'
import logoHTML from '../assets/images/css-3.png'
import logoCSS from '../assets/images/html-5.png'
import logoBootstrap from '../assets/images/bootstrap.png'
import logoMySQL from '../assets/images/mysql.png'

function AboutMeMainComponent() {
  return (
    <div className='aboutMeDiv' id="aboutMeDiv">
        <div className='imgAboutMe'>
            <img src={img}></img>
        </div>
        
        <div className='textAboutMeDiv'>
            <span className='textAboutMe'><h3>
                Hello! My name is Germán, and I am a passionate web development student working on building creative and functional web applications. 
                I am continuously learning new technologies to improve and learn new skills.
                Each project represents a unique challenge where I applied my knowledge of web development tools and best practices.
                <br/><br/>

                I am excited to keep improving and expanding my portfolio as I grow as a web developer. Thank you for visiting! 😊 <br/><br/>

                Technologies I work with: <br/><br/>

                - Server: &emsp; <span className='imagesLanguajes'><img src={logoJava}></img></span> &emsp;
                          <span className='imagesLanguajes'><img src={logoPHP}></img></span> <br/><br/>

                - Client: &emsp; <span className='imagesLanguajes'><img src={logoJS}></img></span> &emsp;
                          <span className='imagesLanguajes'><img src={logoReact}></img></span> &emsp;
                          <span className='imagesLanguajes'><img src={logoCSS}></img></span> &emsp;
                          <span className='imagesLanguajes'><img src={logoHTML}></img></span> &emsp;
                          <span className='imagesLanguajes'><img src={logoBootstrap}></img></span> <br/><br/>

                -Data Base: &emsp; <span className='imagesLanguajes'><img src={logoMySQL}></img></span> &emsp;

            </h3></span>
        </div>
        
                
    </div>
  )
}

export default AboutMeMainComponent