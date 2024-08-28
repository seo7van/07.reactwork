import { createSlice } from "@reduxjs/toolkit"


let user = createSlice({
    name : 'user1',
    initialState : {name : 'choi', age : 26},
    reducers : {       //변경하는 함수
/*     
         changeName(state){
             return{name : 'park', age : 20}
         }
*/
        changeName(state){
            state.name='park'
        },

        increase(state, num){           //Cart에서 dispatch(increase(+1)) 중에 +1 한게 num에 들어옴
            state.count += num.payload      //payload 꼭 붙혀줘야 함
        }
    }
})

export let {changeName, increase} = user.actions      //store내용이 너무 많아서 내보내기 or 분리한거
export default user;

/*
//객체나 배열 변경
let user = createSlice({            //특정 한개(ex_Choi가 출력됨) 일때 ~~~~
    name : 'user1',
    initialState : 'Choi', 
    reducers : {
        changeName(a){
            return 'seojin Choi' + a
        }
    }
})
export let {changeName} = user.actions      //변수로 내보내기
*/