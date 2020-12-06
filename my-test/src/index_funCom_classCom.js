import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

//函数时组件,可以写各种js
function ChildCom(props){
    let title = props.title
    return (
        <div>
            <h1>函数式组件</h1>
            {title}
        </div>
    )
}

//类组件
class Hello extends React.Component{
    render(){
        console.log(this);
        return (
            <div>
                <h1>类组件{this.props.title}</h1>
                <ChildCom title={this.props.title}/>
            </div>
        )
    }
}

//区别
//函数式组件，用于没有事件交互内容的组件，
//类组件(动态组件)，有交互内容
//复合组件：类组件+函数组件


ReactDOM.render(<Hello title="123"/>,document.querySelector('#root'))
// ReactDOM.render(<ChildCom title="123"/>,document.querySelector('#root'))
