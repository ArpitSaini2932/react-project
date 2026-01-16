import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout Authentication={false}>
            <Login />
          </AuthLayout>
        )
      }
      {
        path: "/signup",
        element: (
          <AuthLayout Authentication={false}>
            <Signup />
          </AuthLayout>
        )
      }
      {
        path: "/all-posts",
        element: (
          <AuthLayout Authentication>
            {""}
            <AllPost />
          </AuthLayout>
        )
      }
      {
        path: "/add-posts",
        element: (
          <AuthLayout Authentication>
            {""}
            <AddPost />
          </AuthLayout>
        )
      }
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout Authentication>
            {""}
            <EditPost />
          </AuthLayout>
        )
      }
      {
        path: "/post/:slug",
        element: <Posts />
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>    </Provider>
  </StrictMode>
)
