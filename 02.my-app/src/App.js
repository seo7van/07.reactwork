// import logo from './logo.svg';

import './App.css';
/*
// 별도의 파일 어쩌고 저쩌고 

function App() {
  return (
    <div align="center">
    <h1>더조은에 오신것을 환영합니다</h1>
    <h3>의료용 디지털 영상 표준활용 실무 프로젝트 과정</h3>
    <p className="class1">react style적용하기</p>
    <p id="id1">id로 style적용하기</p>
  </div>
  );
}
*/

/*
// 2. style을 변수에 객체로 저장하여 사용
function App() {
  const style = {
    div : {
      backgroundColor : 'yellow',
      padding : '50px',
      textalign : 'center',
      fontSize : '30px'
    },
    h1 : {
      color : 'red'
    },
    class1 : {
      color : 'yellow'
    }
    id1 : {
      color : 'pink'
    }
  }


function App() {
  return (
    <div style={style.App}>
    <h1 style={style.h1}>더조은에 오신것을 환영합니다</h1>
    <h3>의료용 디지털 영상 표준활용 실무 프로젝트 과정</h3>
    <p style={style.class1}>react style적용하기</p>
    <p style={style.id1}>id로 style적용하기</p>
  </div>
  );
}
*/

// 3. inline방식으로 style 주기
function App() {
  return (
    <div style={{textAlign:'center'}}>
    <h1 style={{color:'red', backgroundColor:'green'}}>더조은에 오신것을 환영합니다</h1>
    <h3>의료용 디지털 영상 표준활용 실무 프로젝트 과정</h3>
    <p style={style.class1}>react style적용하기</p>
    <p style={style.id1}>id로 style적용하기</p>
  </div>
  );
}

export default App;
