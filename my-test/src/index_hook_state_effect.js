import React,{useState,useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
    Switch,
    Redirect,
    useHistory,
    Route,
    Link}  from 'react-router-dom'
import './index.css';


function Home1(props) {
    useEffect(()=>{
        console.log('Home1来了')
        return ()=>{
            console.log('Home走了');
        }
    },[])
return <h2>Home1 </h2>;
  }

  function Home2(props) {
    useEffect(()=>{
        console.log('Home2来了')
    })
return <h2>Home2 </h2>;
  }

//react HOC
function App (){
    let [count,setCount] = useState(0)//不能能用于判断语句中，是按照顺序执行的
    //useEffect代替componentDidMount和componentDidUpdate,是异步的
    //返回一个函数作为销毁的时候用
    //第二个参数是一个数组，[]代表不跟着其他状态变化，[count],只跟着count变化
    useEffect(()=>{
        console.log(count)
        return ()=>{
            console.log('========');
        }
    },[count])
    return (
        <div>
            你点击了{count}
            <button onClick={()=>add(count,setCount)}></button>
        
            <Router>
              <Link to='/'>Home1</Link>
              <Link to='/home2'>home2</Link>
              <Route exact path='/' component={Home1}></Route>
              <Route  path='/home2' component={Home2}></Route>
            </Router>
        </div>
    )
}

function add(count,setCount){
    setCount(count+1)
}

ReactDOM.render(<App />,document.querySelector('#root'))