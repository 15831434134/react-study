import ReactDOM from 'react-dom';
import {
    useState,
    useCallback,
    useEffect
} from 'react'

//自定义hook
function useWinSize() {

    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    const OnResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(()=>{
        window.addEventListener('resize',OnResize)
        return ()=>{
            window.removeEventListener('resize',OnResize)
        }
    },[])

    return size
}

function App() {
    const size = useWinSize()
    return ( 
    <div>   
        页面的size是：{size.width} * {size.height}
    </div>
    )
}

ReactDOM.render( < App /> , document.querySelector('#root'))