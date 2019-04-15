import './style.css';

import React, { Component } from 'react'
import { render } from 'react-dom'

import { getCount } from './stores'

import App from './App'

const renderApp = data => render(
  <App {...data} />, 
  document.querySelector('#root')
);

const update = () => getCount()
  .then(({ count, threshold, setCount, storage }) => ({
    storage,
    count, 
    threshold,
    increment: () => setCount(count + 1).then(update), 
    decrement: () => setCount(count - 1).then(update),
  }))
  .then(renderApp)

  update()