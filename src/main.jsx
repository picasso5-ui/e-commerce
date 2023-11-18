import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/pages/App'
import './index.css'
import MyProvider from '../src/contexts/MyProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
    </MyProvider>
)
