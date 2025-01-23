import './HomeMainComponent.css'
import logo from '../assets/images/img2.jpg'
function HomeMainComponent() {
  return (
    <div className='homeDiv' id='homeDiv'>
        <div className='textDivHome'>
            <span className='whiteText'><h1>Improving</h1></span>
            <span className='blueText'><h2>AS A LIFESTYLE</h2></span>
        </div>

        <div className='imgHome'>
            <img src={logo} alt="wow"/>
        </div>
    </div>
  )
}

export default HomeMainComponent