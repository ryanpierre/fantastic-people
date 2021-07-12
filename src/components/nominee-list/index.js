import React, { useEffect, useState } from 'react';
import Nominee from '../nominee';
import nomineesAPI from '../../hooks/use-nominees';
import './index.css';

// Abstract add vote into the nominees api instead
// demonstrate passing a callback, by passing the addVote method

// END HERE SKIP USE EFFECT
// Cheat in the nomineesAPI and make fetching nominees have a delay of 5s or something
// use this to demonstrate a loading spinner with useEffect

// Remove the use Effect in the hook, and make it a getNominees function instead we can call from a useEffect hook
// in order to demonstrate the useEffect === componentDidMount data fetching use case

// What if we wanted to find the winner ? How could we collect all the votes at any given time ?
// ---> Hoisting state, passing callbacks as props

const NomineeList = () => {
  const [nominees, addVote] = nomineesAPI();
  const [loading, setLoading] = useState(false);
  const [currentLeader, setCurrentLeader] = useState(null);

  // const addVote = () => {
  //   const response = fetch(`url/nominee/${id}`);

  //   const { nominee } = response.json();

  //   setVotes(nominee.votes);
  // };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  const calculateCurrentLeader = () => {};

  return (
    <div className="nominee-list">
      <button>Get leader</button>
      <p>The leader is: {currentLeader}</p>
      {nominees.map((nominee) => (
        <Nominee key={`nominee-${nominee.id}`} {...nominee} onVote={addVote} />
      ))}
    </div>
  );
};

export default NomineeList;
