import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// 변경시 1.
//import { changeName, a, increase} from "../store/store";
//ohayoSlice로 분할 한 후 import
import { changeName, increase} from '../store/ohayoSlice';
import {addCount, addItem} from'../store/store';
function Cart() {
/*
    let state = useSelector((state) => {return state})
    console.log(state);
    console.log(state.user);    
*/

//  let state2 = useSelector(state => state.user)   //원하는것만 가져올때, 워닝에러 뜸
    let state = useSelector(state => state)   //여러개

//  변경시 2. store.js에 요청을 보내는 함수 - ohayoSlice에 reducers로 받음
    let dispatch = useDispatch();

    return (
        <div className='cart'><br/>

    {/* <h2>{state.user}님의 CART LIST</h2><br />    store에 user */}

    <h2>{state.user.name} 님의 CART LIST</h2><br />  {/* 이름 바꾸기*/}
        <Table striped bordered hover>
            <thead>
                 <tr>    {/* store에 있는거 여기 들어왔음 */}
                    <th>number</th>
                    <th>시즌명</th>
                    <th>시즌 수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>

{/*            <tbody>
                <tr>
                    <td>{stock}</td>             여러개 전부다 출력 
                    <td>{stock[1]}</td>          나, 너, 12중에 1번째|(0부터 시작) 
                    <td></td>
                    <td>@mdo</td>
                </tr>
                </tbody>
*/}
            <tbody>
                {
                    state.cart.map(c => //배열의 인덱스 번호를 사용할 때 (c,i) =>
                        <tr>
                            <td>{c.number}</td>
                            <td>{c.title}</td>
                            <td>{c.count}</td>
                            
                            <td>
                                <Button variant="outline-secondary" onClick={() => {
                                    // dispatch(addCount(i))      //store에 카운터한 값 받은거, 배열의 index번호는 언제든지 변할 수 있다 그래서 아이디로 받아라 ?
                                    dispatch(addCount(c.id))
                                }}>
                                    +
                                </Button>


                                {/* <span onClick={() => {
                  let copy = [...count];
                  copy[i] = copy[i] + 1;
                  setCount(copy)}} >         👍</span>{count[i]} */}
                            </td>
                        </tr>
                    )
                }
            </tbody>
          </Table>
        </div>
    )
}

export default Cart;