import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../slices/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <h3 className='mt-6 text-center font-bold text-2xl'>Todos</h3>
                <ul className="list-none">
                    {
                        todos.map((todo) => (
                            <li key={todo.id}
                                className='mt-4 w-2/4 ml-auto mr-auto flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'>
                                <div className='text-white'>{todo.text}</div>
                                <button
                                    className='bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600
                                    rounded text-md'
                                    onClick={() => dispatch(removeTodo(todo.id))}>
                                    X
                                </button>
                            </li>
                        ))
                    }
                </ul>
        </>
    )
}

export default Todos
