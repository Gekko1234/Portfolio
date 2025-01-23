import React from 'react'
import HeaderComponent from './HeaderComponent'
import HomeMainComponent from './HomeMainComponent'
import FooterComponent from './FooterComponent'
import AboutMeMainComponent from './AboutMeMainComponent'
import ProyectsComponent from './ProyectsComponent'

export const Landing = () => {
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <HomeMainComponent></HomeMainComponent>
        <AboutMeMainComponent></AboutMeMainComponent>
        <ProyectsComponent></ProyectsComponent>
        <FooterComponent></FooterComponent>
    </div>
  )
}
