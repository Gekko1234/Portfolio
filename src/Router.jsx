import React from 'react'
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent'
import { FcContacts } from 'react-icons/fc'
import HeaderComponent from './components/HeaderComponent'
import HomeMainComponent from './components/HomeMainComponent'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing'
import Contact from './Contact'

export const Router = () => {
  return (
      <Routes>
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/*" element={<Landing></Landing>}></Route>
      </Routes>

  )
}
