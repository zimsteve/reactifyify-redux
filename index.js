import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

render(<App name='dodos' />, document.querySelector('main'))
console.log('welcome to dodos')
