import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <div>
        <AddTask/>
      </div>
      <div>
      <TaskList/>
      </div>
        
    </div>
  );
}

export default App;
