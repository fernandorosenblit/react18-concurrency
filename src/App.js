import Box from '@mui/material/Box'
import DeferredValueExample from './components/DeferredValueExample'
import TransitionExample from './components/TransitionExample'

import { Routes, Route, Outlet, Link } from 'react-router-dom'

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
    <Box>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/deferred-value-example">Deferred Value Example</Link>
          </li>
          <li>
            <Link to="/transition-example">Users Transition Example</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </Box>
  )
}

export default App
