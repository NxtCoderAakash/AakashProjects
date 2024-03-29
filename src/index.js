import React from 'react'
import { render } from 'react-dom'
import App from '../src/App/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"

if (process.env.CI) {
  // Disable CI mode
  process.env.CI = false;
}
render(
  <React.StrictMode> <App /></React.StrictMode>
 ,
  document.getElementById('root'),
)