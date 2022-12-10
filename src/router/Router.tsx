import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../pages/layouts/Layout'
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/Signup'
import { requiresLoggedIn, requiresLoggedOut } from './protectedRoutes'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={requiresLoggedIn(<Home />)} />
          <Route path="login" element={requiresLoggedOut(<Login />)} />
          <Route path="signup" element={requiresLoggedOut(<SignUp />)} />
          <Route path="*" element={<h1>Page doesn't exist</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
