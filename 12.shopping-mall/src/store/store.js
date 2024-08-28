import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './ohayoSlice';            //분리한거 import 해서 사용함


/*
// 고정 !!!!
let ㅇㅇㅇㅇ = createSlice({
    name : 'stock',
    initialState : [ㅇ,ㅇ,ㅇ,]
*/



let stock = createSlice({           //여러개일때 ~~~~
    name : 'ㅇㅇㅇ',
    initialState : ["나","너",12]
})


let cart = createSlice({           //넘버 시즌명 내용들 cart에 넣어줌
    name : 'cart',
    initialState : [
        {number:1, title:'"2024 pre-fall collection"',count : 2},
        {number:2, title:'"2024 HOT SUMMER"', count:1}
    ],

/*  
// 카운트 하는 기본 !!!!!
     reducers : {
         ㅇㅇㅇㅇ(ㅁ){
             ㅁ[0.count+1]            //0번 항목이 하나씩 증가
         }
     }
 })
*/

    reducers : {
        addCount(s, action){
            let i = s.findIndex(ind => ind.id == action.payload)
            s[i].count+1            //id를 찾아서 카운터 혀라 순서가 바뀌도 ㄱㅊ다 왜냐 넘버 1에 있는 값을 카운터 하기 때문에
        },

    //장바구니 추가
    addItem(state, action) {
        // state.push({id:1, title: '바지', count: 1})
        state.push(action.payload)
        }

    }
})



/*
// 내보내기 고정 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default configureStore({
    reducer : {
        ㅇㅇㅇㅇ : ㅇㅇㅇㅇ.reducer,
        ㅅㅅㅅㅅ : ㅅㅅㅅㅅ.reducer,
        ㅁㅁㅁㅁ : ㅁㅁㅁㅁ.reducer     //맨끝에꺼는 컴마 안찍습니다.
    }
})

*/

export let { addCount, addItem } = cart.actions

export default configureStore({
    reducer : {
        // 내보내기에 등록 (Cart.js여기다가 내보내기)
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer,             
    }
})