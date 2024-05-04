import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomaPage from './components/HomaPage.jsx'
import Application from './components/Application.jsx'
import CompanyProfile from './components/CompanyProfile.jsx'
import Goals from './components/Goals.jsx'
import Certificates from './components/Certificates.jsx'
import SheetsPlates from './components/SheetsPlates.jsx'
import PipesTubes from './components/PipesTubes.jsx'
import IndValves from './components/IndValves.jsx'
import IndFlanges from './components/IndFlanges.jsx'
import BarsRods from './components/BarsRods.jsx'
import SsFasteners from './components/SsFasteners.jsx'
import DairyValves from './components/DairyValves.jsx'
import AngleChannel from './components/AngleChannel.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomaPage />
      },
      {
        path:'/application',
        element : <Application />
      },
      {
        path:'/company-profile',
        element : <CompanyProfile />
      },
      {
        path:'/our-goals',
        element : <Goals />
      },
      {
        path:'/certificates',
        element:<Certificates />
      },
      {
        path:'/sheets-plates-coils',
        element : <SheetsPlates />
      },
      {
        path:'/pipes-tubes',
        element: <PipesTubes />
      },
      {
        path : '/industrial-valves',
        element:<IndValves />
      },
      {
        path : '/industrial-flanges',
        element: <IndFlanges />
      },
      {
        path : '/bars-wires-rods',
        element : <BarsRods />
      },
      {
        path : '/ss-fasteners',
        element : <SsFasteners />,
      },
      {
        path : '/dairy-valves',
        element : <DairyValves />
      },
      {
        path : '/angle-channel',
        element : <AngleChannel />
      },
      {
        path:'/contact',
        element : <Contact />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
