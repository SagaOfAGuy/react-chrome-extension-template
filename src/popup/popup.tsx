import * as React from 'react'
import { render } from 'react-dom'
import './popup.css'

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>This is a test!</h1>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
render(<App />, root)
