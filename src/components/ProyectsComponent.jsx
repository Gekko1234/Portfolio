import './ProyectsComponent.css'
import plaxerWeb from '../assets/images/plaxerWeb.png'
import blackJack from '../assets/images/blackJack.png'
import portfolio from '../assets/images/portfolio.png'


function ProyectsComponent() {
  return (
    <div className='proyectDiv' id='proyectDiv'>
        <h1>Lastest <span className='blueTextProyects'>Proyects</span></h1>
        

        <div className='proyects'>
            <div className='proyect'>
                <img src={plaxerWeb}></img>
                <h4>
                Plaxer Web is a web platform built using Bootstrap to achieve a modern, responsive, and visually appealing design. 
                The shop section is powered by an API, enabling a dynamic and efficient user experience with advanced filtering 
                functionalities to quickly and easily find products.The project leverages the power of JavaScript to seamlessly 
                integrate API data consumption, manage user interactions, and deliver a fast and intuitive experience. Plaxer Web is a solid 
                example of combining modern technologies to create functional and aesthetically pleasing web solutions.
                </h4>
                <a href="https://2daw01.iesalonsocano.org/PaginaWeb_Plaxer/home.html" target='_blank'>Ver</a>

            </div>

            <div className='proyect'>
                <img src={blackJack}></img>
                <h4>
                    BlackJack is a classic card game recreated using JavaScript, HTML, and CSS. The game includes interactive features powered by JavaScript, 
                    a clean layout designed with HTML, and styling enhanced by CSS to create an engaging user experience.
                    This project demonstrates a strong foundation in web development and showcases the ability to create dynamic, interactive web applications.
                </h4>
                <a href="https://2daw01.iesalonsocano.org/blackjackAvanzado/blackjackAvanzado.html" target='_blank'>Ver</a>

            </div>

            <div className='proyectMiddle'>
                <img src={portfolio}></img>
                <h4>
                    This Portfolio is a personal web project built using React, HTML, CSS, and JavaScript. It showcases skills and
                    projects.
                    With React, the portfolio delivers a dynamic and seamless user experience, while HTML and CSS provide a clean 
                    and professional design. JavaScript powers interactive elements, making the portfolio engaging and easy to navigate.
                </h4>
                <a></a>
            </div>




        </div>

    </div>

  )
}

export default ProyectsComponent