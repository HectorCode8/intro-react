import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import {TodoForm} from "../Components/TodoForm";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoSearch } from "../Components/TodoSearch";
import { Modal } from "../Modal/index";


function AppUI() {
  const { error,
          loading, 
          searchedTodos, 
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
         } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no te desesperes...</p>}
        {!loading && !searchedTodos.length && <p> Crea tu primer TODO!!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
         <Modal>
         <TodoForm/>
       </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      
      />
    </React.Fragment>
  );
}

export { AppUI };
