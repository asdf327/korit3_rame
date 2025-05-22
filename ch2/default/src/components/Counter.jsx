import { useState } from "react";
import useTitle from "../js/useTitle";

export default function Counter(){
  const [count, setCount] = useState(0);
  useTitle(`${count}번 클릭`) //이건 순수 JS힘수. 그래서 작성 방법이 다르다.

  return(
    <div>
      <p>Counter = {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
    </div>
  );
}