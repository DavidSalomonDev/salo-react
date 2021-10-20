import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'
import reportWebVitals from './tests/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
	<BrowserRouter>
	  <App />
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
