import React from 'react'
import { FaApple, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import logo from '../assets/logonew2.png';

function Signup({login,setLogin,signup,setSignup}) {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white px-8 py-6 rounded-3xl shadow-md w-full max-w-md md:max-w-xl xl:max-w-md md:py-12 lg:max-w-2xl lg:py-10 xl:py-6">
        <div className="text-center mb-6 md:mb-12 lg:mb-16 xl:mb-6">
          <img src={logo} alt="Logo" className="mx-auto mb-4 w-12 h-12 shadow-xl shadow-blue-300 rounded-full" />
          <h2 className="text-2xl lg:text-3xl xl:text-2xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-600 lg:text-lg xl:text-sm">Please fill in the details to sign up.</p>
        </div>
        <div className="flex justify-center space-x-4 lg:space-x-16 mb-6 md:mb-12 lg:mb-16 xl:mb-6">
          <button className="w-28 h-10 lg:w-36 lg:h-16 xl:w-28 xl:h-10 bg-black text-white rounded-full flex items-center justify-center">
            <span className="sr-only">Sign in with Apple</span>
            <FaApple/>
          </button>
          <button className="w-28 h-10 lg:w-36 lg:h-16 xl:w-28 xl:h-10 bg-white text-gray-900 border border-gray-300 rounded-full flex items-center justify-center">
            <span className="sr-only">Sign in with Google</span>
            <FcGoogle/>
          </button>
          <button className="w-28 h-10 lg:w-36 lg:h-16 xl:w-28 xl:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
            <span className="sr-only">Sign in with Twitter</span>
            <FaTwitter/>
          </button>
        </div>
        <div className=' mb-4 md:mb-8 lg:mb-12 xl:mb-4 flex w-full justify-center items-center'>
            <div className='h-[0.8px] w-1/2  bg-slate-300'></div>
            <span className='px-3 font-medium text-slate-500'>OR</span>
            <div className='h-[0.8px] w-1/2 bg-slate-300'></div>
        </div>
        <form>
          <div className="mb-4 md:mb-8 lg:mb-12 xl:mb-4">
            {/* <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label> */}
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4 md:mb-8 lg:mb-12 xl:mb-4">
            {/* <label className="block text-gray-700 mb-2" htmlFor="email">
              E-Mail Address
            </label> */}
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 md:mb-8 lg:mb-12 xl:mb-4">
            {/* <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label> */}
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
              placeholder="Password"
            />
          </div>
          <div className="mb-6 md:mb-12 lg:mb-16 xl:mb-6">
            {/* <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
              Confirm Password
            </label> */}
            <input 
              type="password" 
              id="confirm-password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
              placeholder="Confirm Password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-red-400 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Sign up
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account? <a href="#" className="text-red-400 hover:underline" onClick={()=>{setSignup(!signup); setLogin(!login)}}>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup