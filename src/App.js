import DeferredValueExample from './components/DeferredValueExample'
import TransitionExample from './components/TransitionExample'
import cn from 'classnames'
import logo from './images/logo.png'
import './index.css'

import { Routes, Route, Outlet, NavLink } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="deferred-value-example"
          element={<DeferredValueExample />}
        />
        <Route path="transition-example" element={<TransitionExample />} />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  return (
    <div className="bg-[#030328] min-h-screen flex flex-col">
      <nav className="flex justify-between bg-black/30 px-8">
        <div>
          <img src={logo} alt="Logo" className="h-12 my-3" />
        </div>
        <div className="flex items-center">
          <NavLink
            to="/deferred-value-example"
            className={({ isActive }) =>
              cn(
                ' mr-4 px-6 py-3 inline-block hover:text-[#61d718] duration-500',
                { 'text-[#61d718]': isActive, 'text-white': !isActive }
              )
            }
          >
            Deferred Value Example
          </NavLink>
          <NavLink
            to="/transition-example"
            className={({ isActive }) =>
              cn(
                ' mr-4 px-6 py-3 inline-block hover:text-[#61d718] duration-500',
                { 'text-[#61d718]': isActive, 'text-white': !isActive }
              )
            }
          >
            Users Transition Example
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
