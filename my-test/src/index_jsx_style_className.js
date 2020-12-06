import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// jsx优点
//1，执行更快，类型更安全，编写模板更简单快速

//jsx语法,只能有一个根节点，普通的html标签要小写

//jsx表达式
/**
 * {1+1}
 * {'11'+time}
 * {id==1?'ok'或者jsx对象或者变量都支持:'No'}
 * 样式 className不是class,class在js中是关键字
 * 
 */

// let app =  <React.StrictMode><App /></React.StrictMode>
// ReactDOM.render(
//  app,
//   document.getElementById('root')
// );

// 函数形式
// function clock(){
// let time = new Date().toLocaleTimeString()
// let h = (<div>111{time}</div>)
// let root = document.querySelector('#root')
// ReactDOM.render(h,root)
// }
// clock()

//函数式组件
// function Clock(props){
//   return (
//   <div>现在的时间是{props.date.toLocaleTimeString()}</div>
//   )
// }
// function run(){
//   ReactDOM.render(<Clock date={new Date()}/>,document.querySelector('#root'))
// }
// run()

//jsx实践样式,style优先级后面高于前面,不要静态动态混着用
let test = {
  background:'red',
  borderBottom:'1px solid black'
}
//动态的样式
// let element = (<div style={test}>123</div>)
//静态样式
let element = (<div  style={{marginTop:'20px',color:'red'}} >123</div>)

//class
let classSrt='red'
//注意，类名连接要加空格
let element2 = (
  <div className={'abc ' + classSrt}>tetse</div>
)
//数组类名方式,但是得手动转一下
let classStr3 = ['abc','red'].join(' ')
let element3 = (
  <div className={classStr3}>
    {/* 注释 */}
    tetse
    </div>
)
ReactDOM.render(element3,document.querySelector('#root'))
