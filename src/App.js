import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './Components/Blog/Register';
import Login from './Components/Blog/Login';
import Home from './Components/Blog/Home';
import Single from './Components/Blog/Single';
import Write from './Components/Blog/Write';
import Navbar from './Components/Blog/components/Navbar';
import Footer from './Components/Blog/components/Footer';
import './style.scss'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single",
        element: <Single />
      }, {
        path: "/write",
        element: <Write />
      }, {
        path: "/post/:id",
        element: <Single />
      }
    ]
  }, {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },

])


function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App