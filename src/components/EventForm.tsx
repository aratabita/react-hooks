import React, { useReducer, useState } from 'react';

// @ts-ignore
const EventForm = ({ state, dispatch }) => {
  // @ts-ignore
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

  const deleteAllEvents = () => (e: any) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    );
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
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
          className="btn btn-primary"
          onClick={addEvent()}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents()}
          disabled={!state.length}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
