import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <div>
        <AddTask/>
      </div>
      <TaskList/>
    </div>
  );
}

export default App;
