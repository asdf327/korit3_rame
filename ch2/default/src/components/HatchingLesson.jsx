import { useState } from "react";

export default function HatchingLesson() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount1(count1 + 1)
    setCount2(count2 + 1) 
    // 실행시키면서 확인하시면 1 | 2가 아니라 1 | 1이 된다.
    // 즉, 일괄처리가 된다. 
  }
  return (
    <>
      <p>현재 카운터 : {count1} | {count2}</p>
      <button onClick={increment}>++</button>
    </>
  );
}