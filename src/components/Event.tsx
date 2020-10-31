import React, { useContext } from 'react';
import { DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';

// @ts-ignore
const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const deleteEvent = () => () => {
    const result = window.confirm(
      `イベントid:${id}を本当に削除してもよろしいでしょうか。`
    );
    if (!result) return;
    dispatch({
      type: DELETE_EVENT,
      id,
    });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteEvent()}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
