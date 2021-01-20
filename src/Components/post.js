import React from 'react'
import Styles from "./postSlider.module.css";
import {ImProfile } from "react-icons/im";
import {MdDateRange} from 'react-icons/md'


export default function Post({region,date,title,author,image}) {
    return (
        <div>
            <div className={image==='babar' ? Styles.babarImage : image==='ferguson' ? Styles.afridiImage : image==='amir' ? Styles.amirImage : Styles.pakImage}>
            <div style={{paddingTop: '60vh'}}>
            <div className={Styles.container} >
           
                <div className={Styles.content}>{region}</div>
                <div className={Styles.content}>{title}</div>
                <div  style={{display:'flex'}}  className={Styles.content}>
                    <div styles={{display:'flex'}}  className={Styles.content}>
                        <span className={Styles.logos}><MdDateRange/></span>{date}
                    </div>
                    <div style={{display:'flex'}}  className={Styles.content}>  <span  className={Styles.logos}><ImProfile/></span>{author}</div>

                </div>
                </div>
                </div>
         
        </div>
            
        </div>
    )
}


