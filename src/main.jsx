import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css'
import App from './App.jsx'
import Store from './pages/Store.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <PageNotFound />,
        children: [
            {
                path: '/',
                element: <Store />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);
