import { useEffect } from 'react';
import './bars.css'
import generateArray from '../generateArray';

export default function Bars({ num, bar, setBar }) {
    let arr = [];

    useEffect(() => {
        generateArray(arr, num);
        setBar(arr)
        arr = [];
    }, [])

    return (
        <div className="bars-container">
            {bar.map((height, index) => {
                return (
                    <div key={index} className='bar' style={{ height: `${height}vh` }} ></div>
                )
            })}
        </div>
    )
}