import React, {
    useRef,
    useState,
    useEffect
} from 'react';
import ReactDOM from 'react-dom';

//useReduce和useContext 实现redux

function App() {
    //useRef获取DOM
    const inputE = useRef()
    const onButtonClick = function(){
        console.log(inputE)
        inputE.current.value= textRef.current
    }


    //useRef保存普通变量
    const [text ,setText] = useState('刘爽')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text
        console.log(' textRef.current ', textRef.current );
    })
    return (
        <div>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <input ref={inputE} type="text"/>
            <button onClick ={onButtonClick}>在inpuyt上展示文字</button>
        </div>
    )
}

ReactDOM.render( < App /> , document.querySelector('#root'))