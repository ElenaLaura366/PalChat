import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Login from './routes/Login.tsx'
import Register from './routes/Register.tsx'

export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Login', element: <Login />},
  {path: '/Register', element: <Register />}
])