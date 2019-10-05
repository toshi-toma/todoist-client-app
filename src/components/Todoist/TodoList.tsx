import React, { useState, useEffect, FC } from "react";

type Todo = {
  comment_count: number;
  completed: boolean;
  content: string;
  created: string;
  due: { recurring: boolean; string: string; date: string };
  id: number;
  label_ids: number[];
  order: number;
  priority: number;
  project_id: number;
  url: string;
};

type Props = {
  token: string;
};

const TodoList: FC<Props> = ({ token }) => {
  const [todaysTodos, setTodaysTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchTodaysTodos = async () => {
      const response = await fetch(
        "https://api.todoist.com/rest/v1/tasks?filter=today",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.json();
    };
    fetchTodaysTodos().then((todos: Todo[]) => {
      const replacedTasks = todos.map(todo => ({
        ...todo,
        content: todo.content.replace(/!!/g, "")
      }));
      setTodaysTodos(replacedTasks);
    });
  });

  if (todaysTodos.length <= 0) {
    return <p>Todays todo is empty</p>;
  }
  return (
    <ul>
      {todaysTodos.map((todo: Todo) => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
  );
};

export default TodoList;
