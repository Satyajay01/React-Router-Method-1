import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { createBrowserRouter} from "react-router-dom"
import { RouterProvider} from "react-router-dom"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/><Home/></>
    },
    {
      path: "/about",
      element: <><NavBar/><About/></>
    },
    {
      path: "/contact",
      element: <><NavBar/><Contact/></>
    }

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App