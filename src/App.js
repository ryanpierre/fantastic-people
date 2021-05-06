import './App.css';
import NomineeList from './components/nominee-list';

const App = () => {
  return (
    <div className="App">
      <h2>The Fantastic Peoples Awards 2021</h2>
      <h3>
        <code>VERSION 2.0</code>
      </h3>
      <NomineeList />
    </div>
  );
};

export default App;
