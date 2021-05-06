import { useEffect, useState } from 'react';

const useNominees = () => {
  const [nominees, setNominees] = useState([]);

  const fetchNominees = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/nominees`, {
      method: 'GET',
    });
    const json = await res.json();

    setNominees(json.nominees);
  };

  useEffect(() => fetchNominees(), []);

  return [nominees];
};

export default useNominees;
