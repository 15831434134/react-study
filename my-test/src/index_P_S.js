import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class P extends React.Component{
    constructor(props){
        // console.log(props);
        super(props)
        this.state = {
            time:new Date().toLocaleTimeString(),
            title:'',
            active:true
        }
    }

    clickEvent = ()=> {
        this.setState({
            active:!this.state.active
        })
    }
   
    render(){
        return (
            <div>
                <button onClick={this.clickEvent}>控制子元素的显示</button>
                <S isActive = {this.state.active}/>
            </div>
        )
    }
}

class S extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        // console.log(props);
        super(props)
    }
    render () {
             let em = null
             if(this.props.isActive){
                 em = 'active'
             }else{
                 em = ''
             }
             return (
                 <div className={em}>123123</div>
             )
        }
}

ReactDOM.render(<P />,document.querySelector('#root'))