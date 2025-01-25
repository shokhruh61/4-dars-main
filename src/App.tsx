import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './pages/ThemeContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/Details'

const App: FC = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path='/about'
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path='/cart'
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path='/product'
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path='/details/:id'
          element={
            <MainLayout>
              <Details />
            </MainLayout>
          }
        />

        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
