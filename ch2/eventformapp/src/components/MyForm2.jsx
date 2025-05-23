import { useState } from "react";

export default function MyForm2() {

  const [text, setText] = useState('');

  const handleCSubmit = (event) => {
    alert(`${text} 라고 입력하셨습니다.`)
    event.preventDefault();
  }

  //input창이 타이핑하는 내용이 갱신되면(즉, text가 바뀌면 -> setText를 쓴다. -> setText()의 알규먼트가 input창에 쓰는 내용이 된다.)
  // const handleChange = (event) => {
  //   setText(event.target.value);
  // }

  return (
    <form onSubmit={handleCSubmit}>
      <input type="text" onChange={event => setText(event.target.value)} value={text} />
      <br />
      <br />
      <input type="submit" value="클릭하세요" />
    </form>
  );
}