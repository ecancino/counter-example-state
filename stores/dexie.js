import Dexie from 'dexie'

const db = new Dexie('DB');

db.version(1).stores({ 
  counters: '++id, count, threshold' 
});

db.counters.add({ count: 0, threshold: 5 });

export const setCount = count => db.counters.update(1, { count }).then(getCount);

export const getCount = () => db.counters.get(1)
  .then(({ count, threshold }) => ({
    storage: 'Dexie',
    count, 
    threshold,
    setCount
  }))