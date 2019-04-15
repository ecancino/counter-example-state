import Loki from 'lokijs'
import LokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter'

import { resolve } from 'bluebird'

const db = new Loki('counters');

const counters = db.addCollection('counters')
const getCounter = () => resolve(counters.get(1))

const setCount = count => getCounter().
  then(counter => counters.update({ ...counter, count })).
  then(getCount)

export const getCount = () => getCounter().
  then(({ count, threshold }) => ({
    storage: 'Loki',
    count, 
    threshold,
    setCount
  })).
  catch(e => ({ message: e.message }))

counters.insert({ count: 0, threshold: 5 })