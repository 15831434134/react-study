import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//react 生命周期
/**
 * 生命周期的三个状态
 * Mounting:将组件插入到DOM中
 * Updating:将数据更新到DOM中
 * Unmounting:将组建移除DOM中
 */

 //生命周期钩子函数
 /*
  componentWilMount:组件将要渲染 AJAX
  componentDidMount:组件渲染完毕
  componentWillReceiveProps:组件将要接收props数据
  shuoldComponentUpdate:组件接收到新的state或者props判断是否更新
  componentWillUpdate:组件将要更新
  componentDidUpdate:组件更新完毕
  componentWillUnmount:组件将要卸载
  componentDidUnmount:组件卸载完毕
 */


 //react插槽 默认插槽props.children
 class P extends React.Component{
     constructor(props){
        super(props)
        console.log(props);
     }

     render(){
         return (
             <div>
                 <h1>组件插槽</h1>
                 <div>{this.props.children}</div>
             </div>
         )
     }
 }

 ReactDOM.render(<P>
     <h1>内容一</h1> 
 </P>,document.querySelector('#root'))
