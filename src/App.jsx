import React from "react"
import AddTodos from "./components/AddTodos"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <h1 className="text-center font-medium text-2xl mt-12">
        Learn about Redux toolkit with Todo App</h1>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
