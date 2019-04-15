import React from 'react';

export default ({ storage, count, increment, decrement, threshold = 10 }) => (
  <section className='card mb-3'>
    <div className='card-header'>{storage} Counter</div>
    <div className='card-body'>
      <h5 className="card-title">Count: {count}</h5>
    </div>
    <div className='card-footer p-0'>
      <div className='btn-group btn-block' role='group' aria-label='Plus / Minus'>
        <button className='btn btn-primary border-white' onClick={increment} disabled={count >= threshold}>+</button>
        <button className='btn btn-primary border-white' onClick={decrement} disabled={count <= -threshold}>-</button>
      </div>
    </div>
  </section>
)