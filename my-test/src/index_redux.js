import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

//react redux
/**
 * Redux 
 * Store:数据仓库
 * State：是一个对象，数据仓库里数据都放在1个state中
 * Action:1个动作，触发数据改变的方法
 * dispatch:动作触发的方法
 * Reducer:1个函数，通过获取动作，改变数据，生成一个新的state，来改变页面
 * 
 */

 //2:创建reducer
 const reducer = function(state={num:0},action){
    console.log(action);
    switch(action.type){
        case 'add':
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
        default:
            break;
    }
    return {...state}
 }

 //1:创建仓库
 const store = createStore(reducer)
 console.log(store);

 function add(){
     //通过仓库方法dispatch进行数据修改
     store.dispatch({type:'add',content:'123'})
 }

 function decrement(){
     //通过仓库方法dispatch进行数据修改
     store.dispatch({type:'decrement'})
 }


 function App (props){
     return (
         <div>
             {/* 修改数据 */}
             <h1>数量：{store.getState().num}</h1>
             <button onClick={add}>+</button>
             <button onClick={decrement}>-</button>
         </div>
     )
 }
 ReactDOM.render(<App />,document.querySelector('#root'))
 //订阅改变数据
 store.subscribe(()=>{
    ReactDOM.render(<App />,document.querySelector('#root'))
 })