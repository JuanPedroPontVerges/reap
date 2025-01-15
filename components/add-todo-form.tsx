"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addTodo, Todo } from "@/app/actions/todo-actions";

interface AddTodoFormProps {
  onAddTodo: (newTodos: Todo[]) => void;
}

export function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      const updatedTodos = addTodo(text);
      onAddTodo(updatedTodos);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
}
