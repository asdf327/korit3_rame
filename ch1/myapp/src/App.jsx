import Hello from './Hello'
import Hello2 from './Hello2'
import Hello3 from './Hello3'
import './App.css'

function App() {
  const diySityle = { color: 'tomato', height:50 }
  return (
    <>
      <h1>hello, React!</h1>
      <h2>첫 번째 component</h2>
      <App2 />
      <div style={{height : 20, width: 200, color: 'red'}}>
        점심 메뉴
      </div>
      <div style={diySityle}>
        저는 쌀과자, 연탕빵, 커리를 먹었습니다
      </div>
      <div className="App-header">CSS</div>
      <Hello></Hello>
      <Hello2 firstName="이" lastName="김"/>
      <Hello2 firstName="삼" lastName="김"/>
      <Hello3 firstName="사" lastName="김"/>
    </>
  )
}

function App2(){
  return (
    <>
      <h2>안녕하세요</h2>
    </>
  )
}

export default App
