import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Home, About, Events, Products, Contact, Page404} from './components/routers'
import  {ConnectedRouter} from 'connected-react-router'
import {history} from './store/index'
import {Colors} from './components/Colors/colorApp'
// console.log(Connected)

// export default () => {
//     return (
//         <BrowserRouter>
//             <div className='main'>
//                 <ConnectedRouter history={history}>
//                     <Switch>
//                         <Route exact path='/' component={Home}></Route>
//                         <Route  path='/about' component={About}></Route>
//                         <Redirect from="/history" to="/about/history" />
//                         <Redirect from="/service" to="/about/service" />
//                         <Redirect from="/location" to="/about/location" />
//                         <Route  path='/events' component={Events}></Route>
//                         <Route  exact path='/products' component={Products}></Route>
//                         <Route exact path='/contact' component={Contact}></Route>
//                         <Route  component={Page404}></Route>
//                     </Switch>
//                 </ConnectedRouter>
//             </div>
//         </BrowserRouter>
//     )
// }
    
export default () => {
    return (
        <BrowserRouter>
            <div className='main'>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path='/' component={Colors} />
                    </Switch>
                </ConnectedRouter>
            </div>
        </BrowserRouter>
    )
}