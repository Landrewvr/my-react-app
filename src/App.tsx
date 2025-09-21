import Greeting from './components/greeting/Greeting'
import User from './components/user/User';
import Counter from './components/Counter'
import userList from './utils/userList';
import DataFetcher from './components/DataFetcher';
import InputFocus from './components/InputFocus';

function App() {
  const users = userList;

  return (
    <div>
      <h1>Lesson 1:</h1>
        <Greeting name="Andrew"/>
      <hr />

      <h1>Lesson 2:</h1>
        User's list:
        {users.map(user => <User key={user.id} user={user} /> )}
      <hr />

      <h1>Lesson 3:</h1>
        Counter:
        <Counter />

        Data Fetcher:
        <DataFetcher />

        Focus Input:
        <InputFocus />
      <hr />

    </div>
  );
}

export default App;
