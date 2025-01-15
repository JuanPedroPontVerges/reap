import { Todo } from "@/app/actions/todo-actions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import BackButton from "./back-button";

interface TodoDetailsProps {
  todo: Todo;
}

export function TodoDetails({ todo }: TodoDetailsProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <BackButton />
          <CardTitle>{todo.text}</CardTitle>
        </div>
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
