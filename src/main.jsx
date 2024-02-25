import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Themecontainer from './components/themeChanger/themecontainer'
import PasswordGenerator from './components/PassGenerator/PasswordGnerator'
import Counter from './components/Counter/Counter'
import Converter from './components/currencyConverter/Converter'
import TodoContainer from './components/To-do/TodoContainer'
import Calculator from './components/Calculator/Calculator'
import ReduxTodo from './components/To-do-Redux/ReduxTodo'
import WeatherApp from './components/WeatherApp/WeatherApp'
import SearchImg from './components/SearchImg/SearchImg'

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
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/about" element={<About />} />
			<Route path="/theme" element={<Themecontainer />} />
			<Route path="/passwordgenerator" element={<PasswordGenerator />} />
			<Route path="/converter" element={<Converter />} />
			<Route path="/counter" element={<Counter />} />
			<Route path="/todo" element={<TodoContainer />} />
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/reduxtodo" element={<ReduxTodo />} />
			<Route path="/weather" element={<WeatherApp />} />
			<Route path="/image" element={<SearchImg />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 