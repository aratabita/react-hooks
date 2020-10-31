import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form action="">
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <input className="form-control" id="formEventBody" type="text" />
          </div>
          <button className="btn btn-primary">イベントを作成する</button>
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
        </table>
      </div>
    </>
  );
};

export default App;
