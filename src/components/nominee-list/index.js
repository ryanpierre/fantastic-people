import React, { useEffect, useState } from 'react';
import Nominee from '../nominee';
import './index.css';

const NomineeList = () => {
  const [nominees, setNominees] = useState([]);

  const fetchNominees = async () => {
    const res = await fetch(
      'https://shielded-meadow-19821.herokuapp.com/nominees',
      { method: 'GET' }
    );
    const json = await res.json();

    setNominees(json.nominees);
  };

  useEffect(() => fetchNominees(), []);

  return (
    <div className="nominee-list">
      {nominees.map((nominee) => (
        <Nominee key={`nominee-${nominee.id}`} {...nominee} />
      ))}
    </div>
  );
};

export default NomineeList;
