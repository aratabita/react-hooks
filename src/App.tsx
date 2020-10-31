import React, { useState } from 'react';

interface AppProps {
  name: string;
  price: number;
}

const App: React.FC<AppProps> = (props) => {
  const [name, setName] = useState<string>(props.name);
  const [price, setPrice] = useState<number>(props.price);

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={() => reset()}>Reset</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
