import React, { useReducer, useState } from 'react';
import reducer from '../reducers/index';
import Events from './Events';
import AppContext from '../contexts/AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <AppContext.Provider value="HEllo im provider">
        <div className="container-fluid">
          <EventForm state={state} dispatch={dispatch} />
          <Events state={state} dispatch={dispatch} />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
