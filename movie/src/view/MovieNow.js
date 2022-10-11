import React, { Component, useState } from "react";
import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import MovieList from "./MovieList";



class MovieNow extends Component{

    render(){
    
      
return(
<div style={{marginTop:"8%"}}>

 <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>上映中作品情報</h3>   
<Tabs
   
   defaultActiveKey="all"
   transition={false}
   id="noanim-tab-example"
   className="mb-3"
      justify
    >
      <Tab eventKey="all" title="All"  >
        <MovieList  genre="all" state="now"/>
      </Tab>
      <Tab eventKey="action" title="Action"  >
      <MovieList   genre="action" state="now"/>
      </Tab>
      <Tab eventKey="anime" title="Anime" >
      <MovieList   genre="anime" state="now"/>
      </Tab>
      <Tab eventKey="thriller" title="Thriller" >
      <MovieList   genre="thriller" state="now"/>
     </Tab>
     <Tab eventKey="romance" title="Romance" >
     <MovieList   genre="romance" state="now"/>
  </Tab>
  <Tab eventKey="horror" title="Horror" >
     <MovieList   genre="horror" state="now"/>
  </Tab>
    </Tabs>
                
                <div class="box is-banner" style={{margin:"0, auto",marginTop:"10%"}}>
    <ul style={{listStyle:"none"}}>
        <li ><a  href="https://entm.auone.jp/toho/aumonday/?medid=thc_ad&srcid=movie&serial=6890" target="_blank"><img className="changeImgDomain" src="https://www.tohotheater.jp/responsive/images/banner/slider_under_aumonday_20220414.jpg" style={{width: "680",paddingLeft:"20%",marginTop:"10%"}}  alt=""/></a></li>
    </ul>
</div>
</div>
)}
}

export default MovieNow;