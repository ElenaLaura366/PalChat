import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Login from './routes/Login.tsx'

export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Login', element: <Login />}
])