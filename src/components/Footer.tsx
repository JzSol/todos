import classNames from 'classnames';
import { useState } from 'react';

export const Footer = () => {
  const [selected, setSelected] = useState('all');
  return (
    <footer className='todoapp__footer'>
      <span className='todo-count'>3 items left</span>

      <nav className='filter'>
        <a
          href='#/'
          className={classNames('filter__link', {
            selected: selected === 'all',
          })}
          onClick={() => setSelected('all')}>
          All
        </a>

        <a
          href='#/active'
          className={classNames('filter__link', {
            selected: selected === 'active',
          })}
          onClick={() => setSelected('active')}>
          Active
        </a>

        <a
          href='#/completed'
          className={classNames('filter__link', {
            selected: selected === 'completed',
          })}
          onClick={() => setSelected('completed')}>
          Completed
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type='button'
        className='todoapp__clear-completed'>
        Clear completed
      </button>
    </footer>
  );
};
