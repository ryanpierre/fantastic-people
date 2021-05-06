import React from 'react';
import './index.css';

const Nominee = ({ id, name, votes }) => {
  return (
    <div className="nominee">
      <p className="nominee-name">{name}</p>
      <p className="nominee-votes">Votes: {votes}</p>
      <button className="nominee-vote-button">Vote</button>
    </div>
  );
};

export default Nominee;
