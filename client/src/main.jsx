import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import ReactGA from 'react-ga4'

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-Q987JF67KQ'
ReactGA.initialize(GA_MEASUREMENT_ID)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
