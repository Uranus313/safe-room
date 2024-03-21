import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.tsx'
import theme from './components/theme.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

 const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={ theme.config.initialColorMode}/>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
