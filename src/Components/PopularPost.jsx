import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Styles from './postSlider.module.css'

class PopularPost  extends Component {
    state = {  }
    render() { 
        return (
                  <div style={{marginBottom:'1vh'}} >

<Card style={{ width: '18rem' }}   className={this.props.image==='babar' ? Styles.babar : this.props.image==='ferguson' ? Styles.afridi : this.props.image==='amir' ? Styles.amir : Styles.pak}>
  <Card.Body>
      <div className={Styles.popContent}>
      <div style={{color:'white',fontWeight:'bolder'}}>
      <div>{this.props.region}</div>
      <div>{this.props.title}</div>
      <div style={{display:'flex'}}> <div>{this.props.date}</div>
      <div>{this.props.author}</div></div>
     
      <div>
      </div>
      
       
      
      </div>
      </div>  
  </Card.Body>
</Card>
            </div>
          );
    }
}
 
export default PopularPost;
       


