import { resolve } from 'bluebird'

const getItem = key => localStorage.getItem(key)
const setItem = (key, value) => localStorage.setItem(key, value)

export const setCount = count => resolve(setItem('count', count)).then(getCount)
  
export const getCount = () => resolve({
  storage: 'Local',
  count: +getItem('count'),
  threshold: +getItem('threshold'),
  setCount
})

setItem('count', 0);
setItem('threshold', 5);