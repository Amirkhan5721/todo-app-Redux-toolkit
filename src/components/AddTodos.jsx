import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../slices/todo/todoSlice'

const AddTodos = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <form onSubmit={addTodoHandler}
            className=' flex justify-center mt-12'>
                <input
                    type="text"
                    placeholder='Enter a todo...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='bg-gray-800 w-2xs h-10 rounded-md text-gray-400
                    p-6 text-2xl font-semibold' />
                <button 
                type='submit'
                className='bg-gradient-to-t from-blue-500 to-purple-500
                w-2xs h-12 ml-4 text-white rounded-md text-2xl font-semibold
                cursor-pointer transition-all duration-300 hover:from-blue-800 hover:to-purple-800'>
                    Add Todo
                </button>
            </form>
        </>
    )
}

export default AddTodos
