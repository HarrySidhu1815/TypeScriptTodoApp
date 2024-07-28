import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContextAlias = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextAlias>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodo) => prevTodo.concat(newTodo));
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    });
  };
  const Todoctx: TodoContextAlias = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={Todoctx}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
