import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.Fragment>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.Fragment>
)
