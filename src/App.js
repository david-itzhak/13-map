import {useState} from "react";
import './App.css';
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }

    const buttonTexts = ['abc', 'def', 'xyz'];

    return (
        <div className="App">
            <Counter count={count}/>
            {buttonTexts.map((text, index) => {
                return <Button onClick={incrementCount} text={text} key={index}/>
            })}
        </div>
    );
}

export default App;
