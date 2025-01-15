"use client";

import { useEffect, useState } from "react";
import { getTodo, Todo } from "@/app/actions/todo-actions";
import { notFound } from "next/navigation";
import { TodoDetails } from "@/components/todo-details";

export default function TodoPage({ params }: { params: { id: string } }) {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchedTodo = getTodo(params.id);
    if (fetchedTodo) {
      setTodo(fetchedTodo);
    } else {
      notFound();
    }
  }, [params.id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-12">
      <TodoDetails todo={todo} />
    </main>
  );
}
