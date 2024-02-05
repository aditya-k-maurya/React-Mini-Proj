import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,

//     children: [
//       {
//         path:'',
//         element: <Home/>
//       },{
//         path:'/home',
//         element:<Home/>
//       },{
//         path:'/about',
//         element:<About/>
//       },{
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/about' element = {<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 