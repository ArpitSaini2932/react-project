import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Making a custom element in React

const NewCustomElement = React.createElement(
  "p",
  null,
    "click here visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    NewCustomElement
 
)