import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
Switch,
Redirect,
useHistory,
Route,
Link}  from 'react-router-dom'

function Home(props) {
    console.log(props);
return <h2>Home </h2>;
  }


  function Event(props){
      console.log(props);
    props.push('/',{msg:'1231232132312'})
  }
  
  function About() {
    let history = useHistory();
    return (
        <div>
            <h2>About</h2>

            <button onClick={()=>Event(history)}>跳转到首页</button>
            {/* 重定向 */}
            {/* <Redirect to='/News/3333'></Redirect> */}
        </div>
    );
  }
  
  function Users(props) {
      console.log(props);
    return <h2>Users</h2>;
  }

  function News(props) {
    console.log(props);
  return <h2>News{props.match.params.id}</h2>;
}

  /**
   * ReactRouter三个属性
   * Router:所有路由的跟组件（底层组件），包裹路由规则的最外层容器
   * 属性:basename:基础路径 ,Router可以在一个组件中写多个
   * Route:路由规则匹配组件，显示当前规则对应的组件
   * 属性：path exact(精确匹配) component
   * Link:路由跳转的组件
   * 属性：to(string|Object) replace：点击链接后，将新地址替换成历史访问记录的原地址
   * 
   * 动态路由 看下面代码
   * 
   * 重定向组件 Redirect to:重定向跳转的路径
   * 
   * Switch 让switch组件内部的Route只匹配一个
   */
function App(){
    let obj = {
    pathname:'/Users',//跳转的路径
    search:'?key=123',//get请求参数
    hash:'#abc',//设置的Hash值
    state:{msg:123}//传入组件的数据
    }
    return (
        <div>
            <h1>路由切换</h1>
            <Router basename='/admin'>
                <div className="nav">
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to={obj} replace>Users</Link>
                    {/* <Link to='/Users'>Users</Link> */}
                    <Link to='/News/123'>News</Link>
                </div>
                <div className="content">
             <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/About' component={About}></Route>
                    <Route path='/About' component={About}></Route>
                    <Route path='/Users' component={Users}></Route>
                    {/* 动态路由 */}
                    <Route path="/News/:id" component={News}></Route>
            </Switch>
                </div>
            </Router>
            
        </div>
    )
}

ReactDOM.render(<App />,document.querySelector('#root'))