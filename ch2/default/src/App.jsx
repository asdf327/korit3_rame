import AuthContext from './components/AuthContext'
import MyComponent from './components/MyComponent'
import MyList from './components/MyList' 
import StudentsList from './components/STudentsList'
import './App.css'


function App() {
  const userNaem = '김일';
  return (
    <>
    <MyList />
    <AuthContext.Provider value={userNaem}>
      <MyComponent />
    </AuthContext.Provider>
    <StudentsList />
    </>
  );
}

export default App
