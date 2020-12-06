import React, {
    useReducer,
    useState,
    useMemo
} from 'react';
import ReactDOM from 'react-dom';

function ChildCom ({name,children}){
    function changXiaohong(){
        console.log('他来了，他来了，小红向我们走来了');
        return name+'小红向我们走来了'
    }
    //useMemo 等价于shuoldComponentUpdate
    const actionXiaohong = useMemo(()=>changXiaohong(),[name])
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}


function App() {
    const [xiaohong,setXiaohong] = useState('小红在待客状态')
    const [zhiling,setZhiling] = useState('志玲在待客状态')
    return (
        <div>
            <button onClick={()=>setXiaohong(new Date().getTime())}>小红</button>
            <button onClick={()=>setZhiling(new Date().getTime()+'志玲向我们走来')}>志玲</button>
            <ChildCom name={xiaohong}>{zhiling}</ChildCom>
        </div>
    )
}

ReactDOM.render( < App /> , document.querySelector('#root'))