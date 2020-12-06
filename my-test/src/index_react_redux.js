import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'
//react redux
/**
 * react-redux
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

 function add(){
     //通过仓库方法dispatch进行数据修改
     return {
         type:'add'
     }
 }

 function decrement(){
     //通过仓库方法dispatch进行数据修改
     store.dispatch({type:'decrement'})
 }

 //映射num
 function mapState(state){
     return {
         num:state.num 
     }
 }

 //触发方法改变数据
 function mapDispath(dispatch){
     return {
         onAddClick:()=>{dispatch(add())}
     }
 }
//关联
 const App2 = connect(
    mapState,
    mapDispath,
 )(App)


 function App (props){
     console.log(props);
     return (
         <div>
             {/* 修改数据 */}
             <h1>数量：{props.num}</h1>
             <button onClick={props.onAddClick}>+</button>
             <button onClick={decrement}>-</button>
         </div>
     )
 }
 ReactDOM.render(
     <Provider store={store}>
         <App2 />
     </Provider>
    ,document.querySelector('#root'))