'use client'

import { Todo, updateTodo, deleteTodo } from '../app/actions/todo-actions'
import { Checkbox } from '@/components/ui/checkbox'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DeleteConfirmationModal } from './delete-confirmation-modal'

interface TodoItemProps {
  todo: Todo
  onUpdate: (updatedTodos: Todo[]) => void
}

export function TodoItem({ todo, onUpdate }: TodoItemProps) {
  const handleToggle = () => {
    const updatedTodos = updateTodo(todo.id, !todo.completed)
    onUpdate(updatedTodos)
  }

  const handleDelete = () => {
    const updatedTodos = deleteTodo(todo.id)
    onUpdate(updatedTodos)
  }

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col p-4 bg-white rounded-lg shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Checkbox checked={todo.completed} onCheckedChange={handleToggle} />
          <Link href={`/item/${todo.id}`} className="hover:underline">
            <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
              {todo.text}
            </span>
          </Link>
        </div>
        <DeleteConfirmationModal onConfirm={handleDelete} />
      </div>
      <span className="text-sm text-gray-500 mt-2">
        Created: {new Date(todo.createdAt).toLocaleString()}
      </span>
    </motion.li>
  )
}

