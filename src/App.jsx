import Firstname from "./features/name/Firstname";
import TodoList from "./features/todos/TodoList";
import { useTodo } from "./hooks/useTodo";

const App = () => {
  const todos = useTodo();

  return (
    <>
      <div>Todo Lists</div>
      <Firstname />
      <div>
        <ul style={{ listStyleType: "number", lineHeight: "35px" }}>
          {todos.map((todo) => (
            <TodoList key={todo.id} title={todo.title} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
