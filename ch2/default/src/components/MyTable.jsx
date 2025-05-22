export default function MyTable(){

  const students = [
    {id: 1, name: '김일', major: '컴포터공학과'},
    {id: 1, name: '김일', major: '컴포터공학과'},
    {id: 1, name: '김일', major: '컴포터공학과'}
    
  ];

  return(
    <>
      <table>
        {
          students.map(students => 
            <tr key={students.id}>
              <tr>{students.id}</tr>
              <tr>{students.major}</tr>
            </tr>
          )
        }
      </table>
    </>
  );
}