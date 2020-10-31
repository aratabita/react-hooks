import Event from './Event';
import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

// @ts-ignore
const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4 className="mt-2">イベント一覧</h4>
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
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
