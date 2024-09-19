import './App.css';
import Context1 from './Context1';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Context1 />
      </UserProvider>
    </div>
  );
}

export default App;
