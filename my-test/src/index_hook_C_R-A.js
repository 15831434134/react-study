// import React, {
//     useReducer
// } from 'react';
import ReactDOM from 'react-dom';
import Buttons from './component/buttons';
import ShowArea from './component/showArea';
import {Color} from './component/Color'

//useReduce和useContext 实现redux

function App() {

    return (
        <div>
        <Color> 
            <ShowArea />
            <Buttons />
         </Color>
        </div>
    )
}

ReactDOM.render( < App /> , document.querySelector('#root'))