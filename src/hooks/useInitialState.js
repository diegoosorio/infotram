import { useState, useEffect } from 'react';

const useInitialState = API => {
  const [data, setData] = useState({
    unidades: [],
    personal: [],
    mantenimiento2500: [],
    mantenimiento7500: []
  });
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return data;
};

export default useInitialState;