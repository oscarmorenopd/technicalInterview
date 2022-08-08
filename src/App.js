import logo from './logo.png';
import './App.css';
import { Todos } from './components/Todos';

function App() {
    return (
        <div className="app">
            <header>
                <img src={logo} className="logo" alt="logo" />
                <h1>Technical Exercise - Todo List</h1>
            </header>
            <Todos />
        </div>
    );
}

export default App;
