import logo from './logo.png';
import './App.css';
import { Todos } from './components/Todos';
import { TodoProvider } from './context';
function App() {
    return (
        <TodoProvider>
            <div className="app">
                <header>
                    <img src={logo} className="logo" alt="logo" />
                    <h1>Technical Exercise - Todo List</h1>
                </header>
                <Todos />
                <></>
            </div>
        </TodoProvider>    
    );
}

export default App;
