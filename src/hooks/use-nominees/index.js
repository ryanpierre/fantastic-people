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

  const castVote = async (id) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/nominees/${id}`, {
      method: 'POST',
    });
    const json = await res.json();

    const nomineeIndex = nominees.findIndex(
      (n) => n.id.toString() === id.toString()
    );

    setNominees([
      ...nominees.slice(0, nomineeIndex),
      json.nominee,
      ...nominees.slice(nomineeIndex + 1, nominees.length),
    ]);
  };

  useEffect(() => fetchNominees(), []);

  return [nominees, castVote];
};

export default useNominees;
