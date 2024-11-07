import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Route/router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>
    
    </AuthProvider>
  </StrictMode>,
)
