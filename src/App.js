import React, {useState} from 'react'
import EShop from './pages/EShop'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'

import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import Title from './components/Title'
import UploadForm from './components/UploadForm'

import {Route, Link} from 'react-router-dom'
import Footer from './pages/Footer'


const App = () => {

  return (
    <div className = "App">
      <NavBar/>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/Gallery" component = {Gallery}/>
      <Route exact path = "/EShop" component = {EShop}/>
      <Route exact path = "/Contact" component = {Contact}/>
      <Footer/>
    </div>
  )
}

export default App

