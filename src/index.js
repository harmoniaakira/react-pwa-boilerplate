import React from 'react'
import { render } from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './mock/server'

render(<App />, document.getElementById('root'))

serviceWorker.register()