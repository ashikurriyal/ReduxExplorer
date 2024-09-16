import React from 'react';
import Count from './Count';
import Button from './Button';

const Counter = ({count, onIncrement, onDecrement}) => {
    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded-xl shadow-lg'>
            <Count count={count}></Count>
            <div className='flex space-x-3'>
                <Button handle={onIncrement}>Increment</Button>
                <Button handle={onDecrement} type='danger'>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;