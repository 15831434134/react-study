import React, {
    useReducer
} from 'react';
import ReactDOM from 'react-dom';

//useReduce (()=>{},0) 

function App() {
    const[count, dispatch] = useReducer((state,action) => {
        switch (action.type) {
            case 'add':
                return state+1;
            case 'decrement':
                return state-1;
            default:
                break;
        }
    }, 0)

    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>{dispatch({type:'add'})}}></button>
            <button onClick={()=>{dispatch({type:'decrement'})}}></button>
        </div>
    )
}

ReactDOM.render( < App /> , document.querySelector('#root'))