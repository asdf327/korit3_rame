import React, { useState, type ChangeEvent } from "react"
import { useTranslation } from "react-i18next";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props:TodoFormProps) => {
  const {t} = useTranslation();
  const {onAddTodo} = props;
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(text.trim()) {
      console.log(text);
        onAddTodo(text);
      setText("");
    }
  };
  const handleDnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add new Task">
      <input type="text" value={text} onChange={handleDnChange} placeholder={t("add_todo_placeholder")} aria-label={t("add_todo_placeholder")} />
      <button type="submit"> {t("add_button")} </button>
    </form>
  )
}

export default TodoForm