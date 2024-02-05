import { GetTodoParams, Todo } from "@/types/todo";

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = (await res.json()) as Todo[];
  return todos;
}

async function getTodo({ todoId }: GetTodoParams) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo = (await res.json()) as Todo;
  return todo;
}

export { getTodos, getTodo };
