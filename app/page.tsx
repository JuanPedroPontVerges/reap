import { TodoList } from '../components/todo-list'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-12">
      <TodoList />
    </main>
  )
}

