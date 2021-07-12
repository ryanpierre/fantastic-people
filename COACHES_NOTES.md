# Coaches Notes
## Introduction

Open up a notepad and have a discussion about some things. We're mostly interested in helping them recall concepts from the SPA pill & video 

- What is different about a single page application and the applications we've created thus far ?
- What is a component ? What is an atomic component ?
- Main idea we want learners to understand: React takes data and turns it into a view

## Part 1: Nominee component deep dive

This is a good time to open the `nominee` component and ask the class to list of things that catch their attention about how the nominee component looks. Use that as a jump off point for a discussion. 

At some point in time, make sure to talk about JSX. Some important things to cover would be:
- Run the app in your browser and show how the JSX in the nominee corresponds to the HTML in our browser.
- Demonstrate that we can run _any javascript_ inside the curly braces in a component
- Demonstrate the camelCasing of properties such as class => className and onclick => onClick

Talk about the structure of the component - it looks kind of like a function doesn't it ? But what's with the `({ arguments })` ?

## Part 2: Props

Make a small component at the bottom of the page to demonstrate how we would go about adding a component to the page. 

```javascript
// AnotherComponent.js
const AnotherComponent = () => {
  return <div>
    <Nominee id="whats" name="this?" votes={0}/>
  </div>
}
```

Talk about the relation between the attributes in the HTML element for Nominee, and how they relate to the destructured props in the Nominee function.

## Part 3: State

Recall that react is about turning data into views. One way to do this is via props - and another way is via `state`. 

We can update the Nominee component here to demonstrate a few key concepts of state and JSX:

```javascript
// Nominee.js
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
```

Some key points to talk about:
- The useState hook. What exactly is that ? How does it work ?
- Conditional elements in the DOM using the `visible &&` boolean operation
- the onClick and toggleVisible callback
- The ternary operator used for the text on the hide or show button

## Part 4: The Nominee List

Open the nominee list and repeat the first excercise. What do learners notice about this component ?

We want to pay attention to the fact that we are mapping over the nominees array provided by our API and generating the Nominee list items dynamically. Point out that if a nominee changes, react is smart enough to know that only one of those dynamically generated children needs to update. It's also worth talking about the spread syntax used on {...nominee} to map nominees to props.

We want to demonstrate adding the functionality to cast a vote to the vote button each Nominee component. Add a prop called onVoteButtonClicked to the mapped Nominee component, as well as the props of the Nominee component itself. 

Then, inside the Nominee component, wire it up so the vote button's onClick event calls the onVoteButtonClicked callback. Notice how the number of votes updated automatically too ! 

This is a good time to open the element inspector in the browser to watch how that old element disappears and a new one replaces it in real time ! cool ! Also notice how *only* the nominee that changed, and in fact only the vote count changes, rather than all the nominees, even though the nominees array has changed.

## Post workshop

Send some links on React. Namely, it's important to show them

- [Thinking In React](https://reactjs.org/docs/thinking-in-react.html)
- [Hooks Overview](https://reactjs.org/docs/hooks-overview.html) and [Using the effect hook](https://reactjs.org/docs/hooks-effect.html)
- [Testing Recipes](https://reactjs.org/docs/testing-recipes.html)