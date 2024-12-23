import './App.css';

function App() {
  // 변수나 함수 정의하여 사용 가능하다.
  const name = '더조은';
  let classnames = '의료용 영상';
  var value = '변수들';
  const funcName = () => {
    return '함수에서 문자 반환';
  }

  // 사용할 때는 {} 안에다가 넣어주면 된다.
  return (
    <div className="App">
      <h1>{name}에 오신것을 환영 합니다.</h1>
      <h3>과정명 : {classnames}</h3>

      <h3>중괄호 안에 넣을 수 있는 것들</h3>
      <ul>
        <li>{"문자"}와 {1+5}숫자 가능</li>
        <li>{funcName()} : 함수 가능</li>
        <li>{value} : 변수에 들어 있는 값 출력 가능</li>
      </ul>

      <h3>중괄호 안에 넣을 수 없는 것들</h3>
      <ul>
        <li>{true} 불리언 불가</li>
        <li>{[]} : 배열 불가</li>
        <li>{value} : 변수에 들어 있는 값 출력 가능</li>
      </ul>
    </div>
  );
}

export default App;