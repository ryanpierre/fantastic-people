import React from 'react';
import Nominee from '../nominee';
import useNominees from '../../hooks/use-nominees';
import './index.css';

const NomineeList = () => {
  const [nominees] = useNominees();

  return (
    <div className="nominee-list">
      {nominees.map((nominee) => (
        <Nominee key={`nominee-${nominee.id}`} {...nominee} />
      ))}
    </div>
  );
};

export default NomineeList;
