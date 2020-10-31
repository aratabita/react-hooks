import React from 'react';

// @ts-ignore
const Event = ({ event, dispatch }) => {
  const id = event.id;
  const deleteEvent = () => () => {
    dispatch({
      type: 'DELETE_EVENT',
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
