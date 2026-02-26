'use client'
import {useState} from "react";
type EVENTYPE = 'ADD'|'SUBSTRACT'|'RESET';
export const Counter = ({value = 10}) => {
    const [counter,setCounter] = useState<number>(value)

    const handleClick = (event: EVENTYPE,quantity = 1) => {
        if (event === 'ADD') {
            setCounter(counter + quantity)
            return;
        }
        if (event === 'SUBSTRACT') {
            setCounter(counter - quantity)
            return;
        }
        setCounter(value)
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2>
                Counter page
            </h2>
            <span className="text-9xl">{counter}</span>
            <div className="flex">
                <button
                    onClick={() => handleClick('ADD')}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">+1
                </button>
                <button
                    onClick={() => handleClick('SUBSTRACT')}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">-1
                </button>
                <button
                    onClick={() => handleClick('RESET')}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">Reiniciar
                </button>
            </div>

        </div>
    );
};
