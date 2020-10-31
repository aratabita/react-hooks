import React, { useReducer, useState } from 'react';
import reducer from '../reducers/index';
import Event from './Event';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = () => (e: any) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form action="">
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input
              className="form-control"
              id="formEventTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <input
              className="form-control"
              id="formEventBody"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={addEvent()}>
            イベントを作成する
          </button>
        </form>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event: any, index: any) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
