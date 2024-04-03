import React from 'react'
import NavBar from './Components/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'


const App = () => {
  const router = createBrowserRouter([
    { path: "/",
      element: <Home/> 
    },
    { path: "/Login",
      element: <Login/> 
    },
    { path: "/About",
      element: <About/> 
    },
    
  ])
  return (
    <>

    <NavBar/>
    <RouterProvider router={router} />
    </>
  )
}

export default App