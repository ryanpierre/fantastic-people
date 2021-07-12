import React, { useState } from 'react';
import './index.css';

// What do you see ? Let learners guide you towards what seems interesting

// Note the mix of JS and HTML
// JSX <-- whats this about ?
// Run with browser side by side to show
// 1. Javascript in JSX is executiing in console
// 2. The corresponding classes and parts on the page
// 3. Why is class ... className ? onclick ? what is onClick ? camelCase JSX

const Nominee = ({ id, name }) => {
  const [votes, setVotes] = useState(0);

  const addVote = () => {
    const response = fetch(`url/nominee/${id}`);

    const { nominee } = response.json();

    setVotes(nominee.votes);
  };

  return (
    <div className="nominee">
      <p className="nominee-name">{name}</p>
      <p className="nominee-votes">Votes: {votes}</p>
      <button className="nominee-vote-button">Vote</button>
    </div>
  );
};

export default Nominee;

// Build a quick pseudo component to demonstrate how we use a component
// Use this as an opportunity to demonstrate how props work
/*
// AnotherComponent.js

const AnotherComponent = () => {
  return <div>
    <Nominee id=""/>
  </div>
}
*/

// React turns data into view! it can come from props, but it can also come from state, and the third place is hooks
// Talk about state - Where does data come from ? it can come from props, but it can also come from state
// What would we put in state ? What do we define as state ?
// States are often reactions to user input that we need to keep for some time, but not forever

// Make a collapse to demo local state <---

// "Talk about components, talk about how we get data into components and how it's reflected in the html"

// Implementing the vote button (callback, a request, updating the data on screen)

/*
const Nominee = ({ id, name, votes }) => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  



  return (
    <div className="nominee">
      <p className="nominee-name">{name}</p>
      {visible && <p className="nominee-votes">Votes: {votes}</p>}
      <button onClick={toggleVisible}>{visible ? 'Hide' : 'Show'}</button>
      <button className="nominee-vote-button">Vote</button>
    </div>
  );
};

*/

// CODE CHANGE: Remove the votes prop and demonstate how to manage votes using state instead
// introduce the onclick callback, fetching external data, and updating state using the external data

// ??? - scrap heap ?
// Different ways you might see this written
// function Nominee
// class Nominee
// hooks
// useState hook explain state
// What is the logical time to introduce JS functions as first class functions. NOT HERE !
