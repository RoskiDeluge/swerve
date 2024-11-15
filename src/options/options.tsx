import React from 'react'
import ReactDOM from 'react-dom'
import './options.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>GAEvent Log:</h1>
      <p>List of all dataLayer GAEvents: ...</p>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
