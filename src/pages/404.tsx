import { useState } from 'react';
export const Page404 = () => {
  const [timer, setTimer] = useState(3);

  return (
    <>
      <h1>Nao autorizado</h1>
      <p>Redicerionando em {}...</p>
    </>
  );
};
