import  './MainComponent.css'

import HomeMainComponent from './HomeMainComponent'
import AboutMeMainComponent from './AboutMeMainComponent'
import ProyectsComponent from './ProyectsComponent'



function MainComponent() {
  return (
    <main className='main'>

      <HomeMainComponent></HomeMainComponent>
      <AboutMeMainComponent></AboutMeMainComponent>
      <ProyectsComponent></ProyectsComponent>

    </main>
  )
}

export default MainComponent