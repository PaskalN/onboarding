import './assets/styles/_all.scss';

// Componets
import MyButton from './components/MyButton';

function App() {
    return (
        <div className="App">
            <MyButton label="My Button Test" dark={false}/>
        </div>
    );
}

export default App;
