import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//react事件
//小驼峰命名法，{this.xx}或者{()=>{xxxx}},参数传递
//{(e)=>this.hell('123',e)}

//react条件渲染 三元运算符或者if-else

//react列表渲染 放在数组里拼接上标签，可以直接渲染
class P extends React.Component{
    constructor(props){
        // console.log(props);
        super(props)
        this.state = {
            childData:[<li>1</li>,<li>2</li>,<li>3</li>]
        }
    }

    setChildData=(e)=>{
       console.log(e.preventDafault);
    }

   
    render(){
        return (
            <div onClick={this.setChildData}>
                <ul>
               {this.state.childData}
                </ul>
            </div>
        )
    }
}


ReactDOM.render(<P />,document.querySelector('#root'))