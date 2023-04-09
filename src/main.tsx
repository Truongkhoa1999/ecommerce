import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import Ban from './components/Ban/Ban'
import Homepage from './components/HomPage/HomePage'

import SignIn from './components/Login/SignIn'
import './index.css'
import { store } from './redux/store'

import AdminPannel from './components/Adminpannel/AdminPannel'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <AdminPannel /> */}
    </Provider>
  </React.StrictMode>
)
