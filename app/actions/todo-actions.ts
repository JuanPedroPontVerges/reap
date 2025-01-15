'use client'

export type Todo = {
  id: string
  text: string
  completed: boolean
  createdAt: string
}

export function addTodo(text: string): Todo[] {
  const todos = getTodos()
  const newTodo: Todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  }
  const updatedTodos = [...todos, newTodo]
  localStorage.setItem('todos', JSON.stringify(updatedTodos))
  return updatedTodos
}

export function updateTodo(id: string, completed: boolean): Todo[] {
  const todos = getTodos()
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed } : todo
  )
  localStorage.setItem('todos', JSON.stringify(updatedTodos))
  return updatedTodos
}

export function deleteTodo(id: string): Todo[] {
  const todos = getTodos()
  const updatedTodos = todos.filter((todo) => todo.id !== id)
  localStorage.setItem('todos', JSON.stringify(updatedTodos))
  return updatedTodos
}

export function getTodos(): Todo[] {
  const storedTodos = localStorage.getItem('todos')
  return storedTodos ? JSON.parse(storedTodos) : []
}

export function getTodo(id: string): Todo | undefined {
  const todos = getTodos()
  return todos.find(todo => todo.id === id)
}

