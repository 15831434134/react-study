import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
    constructor(props){
        // console.log(props);
        super(props)
        this.state = {
            time:new Date().toLocaleTimeString(),
            title:''
        }
        //第一种改编this指向
        // this.clickEvent = this.clickEvent.bind(this)
    }
    componentDidMount(){
        setInterval(()=>{
            //修改数据通过setState修改数据后，并不会立刻更新DOM
            //会统一对比虚拟DOM，再统一修改，提升性能
            //小程序也是借鉴react
           this.setState({
            time:new Date().toLocaleTimeString()
           })
        },1000)
    }
    //第三种改编this指向
    clickEvent = ()=> {
        this.setState({
            title:'456'
        })
        console.log(123);
    }
    render(){
        // console.log(123)
        // this.state.time  = new Date().toLocaleTimeString()
        return (
            <div>
                <h1>类组件{this.state.time}</h1>
                <h2>{this.state.title}</h2>
                <button onClick={this.clickEvent}></button>
                {/*第二种改变this指向 */}
                {/* <button onClick={this.clickEvent.bind(this)}></button> */}
            </div>
        )
    }
}

ReactDOM.render(<Hello title="123"/>,document.querySelector('#root'))
//注意，类组件同时渲染一个组件的时候，constructor不会重新执行，render会
// setInterval(()=>{
//     ReactDOM.render(<Hello title="123"/>,document.querySelector('#root'))
// },1000)