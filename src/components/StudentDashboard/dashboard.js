import React,{Component}  from 'react';
import { Redirect,Route } from 'react-router-dom';
import Student from './Student';


class dashboard extends Component{

  render(){
     return(
     <div>
         {
           sessionStorage.getItem('ltk') ? 
           <Route path='/dashboard' component={Student} /> : 
           <Redirect to='/login' />
         }
     </div>
     );
}

}

export default dashboard;