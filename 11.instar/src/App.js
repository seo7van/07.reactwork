import './App.css';
import { useState } from 'react';


function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title,setTitle] = useState(["딜리셧 부띠끄", "샐러드 몬스터", "보울박스"]);
  let [modal,setModal] = useState(false);
  let [modalIndex, setmodalIndex] = useState(0); //div의 index의 번호 변경 [0,1,2]

  return (
    <div className="App">
      <h2 className="title">샐러드 맛집 L i s t</h2>
      {/* 원본이 바뀐다 */}
      {/* <button onClick={() => {setTitle(["아무나 샐러드", "샐러드 몬스터", "보울박스"]);}}>글수정</button> */}
      <button onClick={() => {
        let copy = [...title];
        copy[0] = "아무나 샐러드";
        setTitle(copy);
      }}>글수정</button>


        {/* title = ["딜리셧 부띠끄", "샐러드 몬스터", "보울박스"] */}
        {
        title.map(function(t, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setmodalIndex(i)}}>{t}</h4>
              <p>8월 22일  <span onClick={() => {
                  let copy = [...count];
                  copy[i] = copy[i] + 1;
                  setCount(copy)
                }} >👍</span>{count[i]}</p>

                <button onClick={() => {
                  let copy = [...title];
                  copy.splice(i,1)

                }}>
                  삭제
                </button>
            </div>
          )
        })
      }

      <input onChange={(e) => {console.log(e.target.value)}}></input>
      {/* 삼항연산자는 ㄷㅐ괄호임다 */}
      { modal ? <Modal title={title} modalIndex={modalIndex} /> : null }
    


    </div>
  );
}


function Modal(props) {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <h4>날짜</h4>
      <h4>상세 내용</h4>
    </div>
  )
}


export default App;
