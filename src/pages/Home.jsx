import React,{useState} from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import NewArrival from '../components/NewArrival'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AuthPage from './AuthPage'

function Home({login,setLogin,signup,setSignup,authpage,setAuthpage}) {

  return (
    <div>
        <Hero/>
        <About/>
        <NewArrival/>
        <Reviews/>
        <Contact/>
        <Footer/>
        <AuthPage login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} authpage={authpage} setAuthpage={setAuthpage}/>
    </div>
  )
}

export default Home