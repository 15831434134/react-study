import React,{useState,createContext,useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CountContext = createContext()

//useContext 解决父子组件传值的问题
function Counter(){
    let count = useContext(CountContext)
    return <h2>{count}</h2>
}
//react HOC
function App (){
    let [count,setCount] = useState(0)
    return (
        <div>
            你点击了{count}
            <button onClick={()=>setCount(count+1)}></button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

ReactDOM.render(<App />,document.querySelector('#root'))