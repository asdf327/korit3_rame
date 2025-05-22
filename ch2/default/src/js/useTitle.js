import { useEffect } from "react"

function useTitle(title) {
  useEffect( () => {
    console.log('title가 바뀌었습니다');
    document.title = title;
  }, [title]);
}

export default useTitle 