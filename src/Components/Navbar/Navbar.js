import './navbar.css';
import generateArray from '../generateArray';

export default function Navbar({ setNum, num, setAlgo, setBar }) {
    return (
        <nav>
            <h1>sorting visualizer</h1>
            <ul className="list-conatiner">

                <li >
                    <input id='number' type="range" value={num} min={50} step={2} max={80} onChange={(e) => {
                        setNum(+(e.target.value))
                    }} />
                    <label htmlFor="number">{num}</label>
                </li>
                <li onClick={() => {
                    let arr = [];
                    arr = generateArray(arr, num);
                    setBar(arr)
                    arr = [];
                }} >Generate Array</li>
                <li>
                    <select name="choice" id="choice" onChange={(e) => {
                        setAlgo(e.target.value)
                    }}>
                        <option value="">--- Choose Algorithm ---</option>
                        <option value="bubbleSort">Bubble Sort</option>
                        <option value="selectionSort">Selection Sort</option>
                        <option value="insertionSort">Insertion Sort</option>
                        <option value="quickSort">Quick Sort</option>
                        <option value="heapSort">Heap Sort</option>
                        <option value="mergeSort">Merge Sort</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}