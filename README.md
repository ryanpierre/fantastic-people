# The Fantastic People's Awards 

## Intro

Today we'll be building a voting web app for the inaugaural Fantastic People's awards. This workshop is focused on developing our vocabulary and skills with React.js (mostly referred to just as "React" though)

Our web app will:
- Fetch the nominees from an external API and display them on screen
- Allow us to vote on the nominee we think deserves this years award
- Toggle between a voting view and a results view

## Learning Objectives**

- I can explain what a component, state, and props are
- I can build an atomic component
- I can build a composite component
- I can lift state up
- I can build components using hooks

## Workshop Setup

- Clone this repo
- `cd fantastic-people` to enter the root directory of this project
- `cp .env.example .env.local` to create our local environment 
- Open `.env.local` in your editor. After the `=` sign in `REACT_APP_API_URL=`, add the following with `(dot)` replaced by the `.` character: `https://shielded-meadow-19821(dot)herokuapp(dot)com`
- `yarn` to install dependencies
- `yarn start` to start the server and start working!

## Excercise 1 - Group

- We don't want to show how many votes each candidate has until you've voted to prevent bias
- In the Nominee component, `src/components/nominee.js` Implement a simple callback on the vote button that logs 'vote collected' and switches the state so the vote button disappears

## Excercise 2 - Breakout

- Without coding, discuss how you might go about changing the state of *all* voting buttons to prevent voting after the first vote has been collected. How can we broadcast to every other button ?

- What props will our nominee need ? What state will it need ? Will any other components state or props need to be updated ? 

## Excercise 3 - Breakout

- Let's implement it. When we vote for one person, all other people should switch into the vote count state.

## Excercise 4 - Group

- Let's chat about what solutions we had for that. Did anybody manage to make it work ?
- This isn't really ideal either because as soon as we refresh the page we can vote again. Let's add a check on startup using the useEffect hook to determine whether we've voted already, and skip to the results screen
