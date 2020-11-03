import React, { useReducer, useEffect } from 'react';
import reducer from '../reducers';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import OperationLogs from './OperationLogs';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';

const LOCAL_STORAGE_KEY = 'appWithRedux';

const App = () => {
  const appState = localStorage.getItem(LOCAL_STORAGE_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState); //combine-reducerを入れた場合はオブジェクトにする必要があ

  useEffect(() => {
    const json = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, json);
  }, [state]);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />
          <OperationLogs />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
