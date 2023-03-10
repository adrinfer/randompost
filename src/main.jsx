import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './pages/errorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/ab',
      element: <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />AAAAAAAAAA</div>,
      errorElement: <ErrorPage />
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
