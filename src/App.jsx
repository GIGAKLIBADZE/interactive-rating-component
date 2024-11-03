import './App.css';
import './Reset.css';
import Card from './components/Card/Card';
import Thanks from './components/Card/Thanks';
import {useState} from 'react';

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();
  return (
    <>
      {submit ? (<Thanks rate={rate}/>) : (<Card setSubmit={setSubmit} rate={rate} setRate={setRate}/>)}
    </>
  );
}

export default App
