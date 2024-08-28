import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css';
import {Context1} from '../App';

function Detail (props) {
    //useContext(Context1)을 해체        //안에 있는것을 해체 해주는 역할
/*
    //  첫번째 방법
    let a = useContext(Context1);
    console.log(a);
    constructor(a.stock);   // [10,7,5] 들어있음
*/
    //  두번째 방법
    let {stock, clothes} = useContext(Context1);
    console.log(stock);
    console.log(clothes);


    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })





    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 1000)
        return () => {
            clearTimeout(timer);
        }
    }, [alert])

    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {  // Not a Number 숫자이면 false, 문자이면 true
            alert('그러지마요');
        }
    },[num])



    let [tab, setTab] = useState(0);

    let [fade2, setFade2] = useState('start')

    useEffect (() => {
        setFade2('end')
    }, [])


    return (
        <div>
            
        {/* {setstock[200,300,200].title}    // 배열을 바꾸려면 set 만들어야 함 이 아래부터는 싹 바뀐다고 보면 됨 */}
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}

            <Container className> 
                <Row>
                    <Col lg={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} />
                    </Col>    
                    <Col lg={6}>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <Button variant="info">주문하기</Button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0">BUTTON 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1">BUTTON 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2">BUTTON 2</Nav.Link>
                </Nav.Item>
            </Nav>


            <TabContent tab={tab} />
        </div>
    )
}

function TabContent({tab}) {
    let [fade, setFade] = useState('')
    
    let {stock} = useContext(Context1);

    useEffect(() => {
        setTimeout(() => {setFade('end')},100)
        return () => {
            setFade('start')
        }
    }, [tab])


    return( 
        <div className={fade}>
            { [<div>{stock}</div>, <div>{stock[1]}</div>, <div>{stock[teb]}</div>][tab] }
        </div>
    )
}

export default Detail;
        