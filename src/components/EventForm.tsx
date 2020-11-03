import React, { useReducer, useState, useContext } from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../util';

// @ts-ignore
const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  // @ts-ignore
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = () => (e: any) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601(),
    });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = () => (e: any) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllOperationLogs = (e: any) => {
    e.preventDefault();
    const result = window.confirm(
      '全ての操作ログを本当に削除してもよろしいでしょうか'
    );
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  const unCreatable = title === '' || body === '';
  return (
    <>
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
        <button
          className="btn btn-primary mr-5"
          onClick={addEvent()}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents()}
          disabled={!state.events.length}
        >
          全てのイベントを削除する
        </button>{' '}
        <button
          className="btn btn-danger"
          onClick={(e) => deleteAllOperationLogs(e)}
          disabled={!state.operationLogs.length}
        >
          全てのログを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
