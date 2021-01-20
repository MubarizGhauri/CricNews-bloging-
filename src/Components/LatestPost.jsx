import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Styles from './postSlider.module.css'
class LatestPost extends Component {
    state = {  }
    render() { 
        return (

            <div style={{marginBottom:'1vh'}}>

<Card style={{ width: '18rem' }}>
  <Card.Body>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <div className={this.props.image==='babar' ? Styles.bab : this.props.image==='afridi' ? Styles.afr : Styles.am}></div>
      <div>
          <h6 className={Styles.region}>{this.props.region}</h6>
      <Card.Title style={{fontSize:'1.1vw'}}>{this.props.title}</Card.Title>
      </div>
    
    
      </div>
     
   
  </Card.Body>
</Card>











            </div>

          );
    }
}
 
export default LatestPost;


