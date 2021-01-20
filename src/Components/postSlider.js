import React from "react";
import Styles from "./postSlider.module.css";
import Post from "./post";
import NavBar from './NavBar';
import Footer from './Footer';
import LatestPost from "./LatestPost";
import PopularPost from './PopularPost'
export default function PostSlider() {
  return (
    <div>
      <NavBar/> 
      <div className={Styles.subContainer}>
      <div className={Styles.mainContainer}>
        <div className={Styles.slider} >
        <div className={Styles.slider_child}><Post title={'Babar missess out NewZeland T20Is'} date={'15 Dec ,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'babar'}/></div>
        <div className={Styles.slider_child}><Post title={'Afridi gutted on Tendulkar drop catch'} date={'27 Apr ,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'ferguson'}/></div>
        <div className={Styles.slider_child}><Post title={'Amir bags another fiver in LPL'} date={'10 Mar,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'amir'}/></div>
        <div className={Styles.slider_child}><Post title={'Pakistan Vs NewZeland Test seris squad announced'} date={'4 Feb,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'pak'}/></div>
        <div className={Styles.slider_child}><Post title={'Babar missess out NewZeland T20Is'} date={'15 Dec ,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'babar'}/></div>
      </div>
      </div>    
      <div style={{display:'flex',flexDirection:'column',marginTop:'7vh',marginRight:'3vw'}}>
      <h5 className={Styles.latestPost}>Latest Posts</h5>
      <LatestPost title={'Babar missess out NewZeland T20Is'} region={'Pakistan'} image={'babar'}/>
      <LatestPost title={'Amir bags another fiver in LPL'}  region={'Pakistan'} image={'amir'}/>
      <LatestPost title={'Afridi gutted on Tendulkar drop catch'}  region={'Pakistan'} image={'afridi'}/>
      </div>
   </div>
   
   <div className={Styles.pop}>
   <div className={Styles.popularPostHeading}> Popular Post</div>
     <div className={Styles.popularPost}>
       <PopularPost title={'Amir bags another fiver in LPL Championship'}  date={'15 Dec ,2019'} date={'10 Mar,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'amir'} />
       <PopularPost  title={'Babar missess out NewZeland T20Is'}  region={'Pakistan'} date={'15 Dec ,2019'}  author={'Mubariz Ali'} image={'babar'}/>
       <PopularPost title={'Afridi gutted on Tendulkar drop catch'}  region={'Pakistan'} date={'27 Apr ,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'ferguson'}/>
       <PopularPost title={'Pakistan Vs NewZeland Test seris squad announced'}  region={'Pakistan'} date={'4 Feb,2019'} region={'Pakistan'} author={'Mubariz Ali'} image={'pak'}/>
    </div>
   </div>
  
     
        
      <Footer/>
    </div>
  );
}




