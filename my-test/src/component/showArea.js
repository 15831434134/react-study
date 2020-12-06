import React,{useContext} from 'react'
import {ColorContext} from './Color'

function ShowArea(){
    const {color} = useContext(ColorContext)
    return (
    <div style={{color}}>我是蓝色文字{color}</div>
    )
}

export default ShowArea