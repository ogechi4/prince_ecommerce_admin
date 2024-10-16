import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

function App() {
  // when we are not authenticated show the the login page
  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'):'')

      // to stop refreshing the page back to the login after proper login

      useEffect(() =>{
        localStorage.setItem('token', token)
   },[token])
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === ""
        ? <Login setToken={setToken} />
        : <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/add' element={<List />} />
                <Route path='/add' element={<Orders />} />

              </Routes>
            </div>
          </div>

        </>
      }

    </div>
  )
}

export default App
