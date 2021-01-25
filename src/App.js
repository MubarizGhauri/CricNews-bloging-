import React, { Component } from 'react';





import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Style.css';
import About from './Components/About';
import PostSlider from './Components/postSlider';
import Create from './Components/Create';
import News from './Components/News';
import Live from './Components/Live';
//import "font-awesome/css/font-awesome.css";

class App extends Component {
  state = {  }
  render() { 
    return ( <BrowserRouter>  
     
       <div>
     <Switch>
     <Route path='/' component={PostSlider} exact />
      <Route path='/about' component={About}/>
      <Route path='/create' component={Create}/>
      <Route path='/blogs' component={News}/>
      <Route path='/live' component={Live}/>
     </Switch>
     
   

     
      </div>
      </BrowserRouter>

      
     );
  }
}
 
export default App;
