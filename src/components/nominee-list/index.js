import React, { useEffect, useState } from 'react';
import Nominee from '../nominee';
import './index.css';

const NomineeList = () => {
  const [nominees, setNominees] = useState([]);

  const fetchNominees = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/nominees`, {
      method: 'GET',
    });
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
