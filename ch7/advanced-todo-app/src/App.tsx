// import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import type { Todo } from './types/Todo';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';

// function App() {
//   const [todos, setTodos] = useState<Todo[]>(() => {
//     const storedTodos = localStorage.getItem("todos");
//     return storedTodos ? JSON.parse(storedTodos) : [];
//   });

const App: React.FC = () => {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const addTodo = (text: string) => {
    // console.log(text);
    const newTodo: Todo = {
      id:uuidv4(),
      text,
      completed: false,
    }
    const updatedTodos = [...todos, newTodo];
    console.log("updatedTodos ---> ", updatedTodos);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo));
    console.log(updatedTodos);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  return (
    <div>
      <h1>{t('app_title')}</h1>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('de')}>German</button>
      </div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete} />
    </div>
  )
}

export default App
