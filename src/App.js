import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Bars from './Components/Bars/Bars';
import { useState } from 'react';
import bubbleSort from './Algorithams/bubbleSort'
import selectionSort from './Algorithams/selectionSort';
import insertionSort from './Algorithams/insertionSort';
import quickSort from './Algorithams/quickSort';
import heapSort from './Algorithams/heapSort';
import mergeSort from './Algorithams/mergeSort';

function App() {
  const [num, setNum] = useState(60);
  const [bar, setBar] = useState([]);
  const [algo, setAlgo] = useState("");

  const all = document.querySelectorAll('.bar');

  const callAlgo = () => {
    switch (algo) {
      case 'bubbleSort':
        bubbleSort(bar, all, num);
        break;
      case 'selectionSort':
        selectionSort(bar, all, num);
        break;
      case 'insertionSort':
        insertionSort(bar, all, num);
        break;
      case 'quickSort':
        quickSort(bar, all, 0, num - 1);
        break;
      case 'heapSort':
        heapSort(bar, all);
        break;
      case 'mergeSort':
        mergeSort(bar, all, 0, num - 1);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <header>
        <Navbar setNum={setNum} num={num} setAlgo={setAlgo} setBar={setBar} />
      </header>
      <main>
        <div className="btn">
          <button onClick={() => {
            callAlgo();
          }}>Sort!</button>
        </div>

        <div className="bars">
          <Bars num={num} bar={bar} setBar={setBar} />
        </div>
      </main>
    </>
  );
}

export default App;
