import React, { useState, useEffect } from 'react';

interface AppProps {
  name: string;
  price: number;
}

const App: React.FC<AppProps> = (props) => {
  // @ts-ignore
  const [state, setState] = useState<string>(props);
  const { name, price } = state;

  useEffect(() => {
    console.log('useEffect is like componentDidMount & componentDidUpdate'); //renderの後に呼ばれる。DOMが生成された後に呼ばれる。
  });

  useEffect(() => {
    console.log('componentDidMount//[]を渡すと、最初のrenderingのみ呼ばれる');
  }, []);

  useEffect(() => {
    console.log(
      'componentDidUpdate//[name]を渡すと、nameが更新されるときのみ呼ばれる。'
    );
  }, [name]);

  const renderPeriod = () => {
    console.log('renderPeriod');
    return '。';
  };

  return (
    <>
      <p>
        現在の{name}は、{price}円です{renderPeriod()}
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price + -1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
