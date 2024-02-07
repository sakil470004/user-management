import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './pages/routes/routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        {/* <QueryClientProvider client={QueryClient}> */}
          <RouterProvider router={router} />
        {/* </QueryClientProvider> */}
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
