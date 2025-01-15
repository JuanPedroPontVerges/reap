'use client'

import { useTodos } from '../app/hooks/use-todos'
import { AddTodoForm } from './add-todo-form'
import { TodoItem } from './todo-item'
import { motion, AnimatePresence } from 'framer-motion'

export function TodoList() {
  const { todos, updateTodos } = useTodos()

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Reap Todo List</h1>
      <AddTodoForm onAddTodo={updateTodos} />
      <motion.ul className="mt-6 space-y-4">
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdate={updateTodos} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}

