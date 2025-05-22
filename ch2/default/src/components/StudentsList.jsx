export default function StudentsList(){
  const numbers = ['김일', '김이', '김삼', '김사', '김오', '김욱', '김칠', '김팔', '김구', '김십'];

  return (
    <>
    <ul>
      {
        numbers.map((numbers, index) => 
          <li key={index}> {index + 1} {numbers} </li>
        )
      }
      </ul>
    </>
  )
}