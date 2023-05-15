/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { Headers } from './components/Headers';
import { Footer } from './components/Footer';
import { ErrorModal } from './components/ErrorModal';
import { Main } from './components/Main';

export const App: React.FC = () => {
  return (
    <div className='todoapp'>
      <h1 className='todoapp__title'>todos</h1>
      <div className='todoapp__content'>
        <Headers />
        <Main />
        {/* Hide the footer if there are no todos */}
        <Footer />
      </div>
      <ErrorModal />
    </div>
  );
};
