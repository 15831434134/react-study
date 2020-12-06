import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class P extends React.Component{
    constructor(props){
        // console.log(props);
        super(props)
        this.state = {
            childData:null
        }
    }

    setChildData=(data)=>{
        this.setState({
            childData:data
        })
    }

   
    render(){
        return (
            <div>
               <h1>子元素给父元素的数据：{this.state.childData}</h1>
                <S setChildData={this.setChildData}/>
            </div>
        )
    }
}

class S extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        // console.log(props);
        super(props)
        this.state = {
            msg:'1232'
        }
    }
    clickEvent = ()=>{
        console.log(this.props)
        //实际式调用父元素传递过来的数据
       this.props.setChildData(this.state.msg)
    }
    render () {
             return (
                 <div>

                     <button onClick={()=>this.props.setChildData('张家界')}>给父亲</button>
                     <button onClick={this.clickEvent}>给父亲</button>
                 </div>
             )
        }
}

ReactDOM.render(<P />,document.querySelector('#root'))