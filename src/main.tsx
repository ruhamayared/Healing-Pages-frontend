import React from 'react'
import ReactDOM from 'react-dom/client'
import "./reset.css"
import './index.css'
import { RouterProvider } from "react-router-dom"
import router from './router';
import Auth0ProviderWithHistory from './auth/auth0Provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory> {/* Wrap RouterProvider with Auth0ProviderWithHistory */}
      <RouterProvider router={router} />
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
)
