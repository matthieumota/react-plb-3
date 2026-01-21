import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import About from './About.tsx'
import Book from './pages/Book.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: 'a-propos', element: <About /> },
      { path: 'livre/:id', Component: Book },
    ],
    errorElement: <div>Une erreur est survenue...</div>,
  },
  { path: '*', Component: () => <h1>404</h1> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
