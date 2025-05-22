import { useEffect, useState } from "react";

function Counter2() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect 호출되었습니다.')
    return () => {
      console.log('ciean up호출되었습니다.')
    }
  }, [count]);

  return(
    <div>
      <p>Counter = {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
    </div>
  );
}

export default Counter2