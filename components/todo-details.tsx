import { Todo } from "@/app/actions/todo-actions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface TodoDetailsProps {
  todo: Todo;
}

export function TodoDetails({ todo }: TodoDetailsProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>{todo.text}</CardTitle>
        <CardDescription>
          Created on: {new Date(todo.createdAt).toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg">
          Status: {todo.completed ? "Completed" : "Not completed"}
        </p>
      </CardContent>
    </Card>
  );
}
