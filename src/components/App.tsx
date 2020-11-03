import React, { useReducer, useState } from 'react';
import reducer from '../reducers';
import Events from './Events';
import AppContext from '../contexts/AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState); //combine-reducerを入れた場合はオブジェクトにする必要があ
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
