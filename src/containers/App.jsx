import logo from '../assets/images/logo.svg'

function App() {
  return (
	<div className = 'App'>
	  <header className = 'App-header'>
		<img src = {logo} className = 'App-logo' alt = 'logo' />
		<p>Thank you for downloading this folder-structured template</p>
		<p>
		  Edit <code>src/containers/App.jsx</code> and save to reload.
		</p>
		<a
		  className = 'App-link'
		  href = 'https://reactjs.org'
		  target = '_blank'
		  rel = 'noopener noreferrer'
		>
		  Check for instructions on how to use this React Template
		</a>
		<p>Pull requests are welcome</p>
	  </header>
	</div>
  )
}

export default App
