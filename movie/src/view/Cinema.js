import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
const Cinema = () =>{
return(

<div style={{marginTop:"8%",height:"auto"}}>
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>劇場一覧</h3>  

        <Accordion style={{width:"80%",margin:"0 auto",marginTop:"3%"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>東北地区</Accordion.Header>
        <Accordion.Body>
        <p>青森県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:1}} ><h5>TOHOシネマズ おいらせ下田</h5></Link>
        <hr></hr>
        <p>秋田県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:2}} ><h5>TOHOシネマズ 秋田</h5></Link>
        <hr></hr>
        <p>宮城県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:3}} > <h5>TOHOシネマズ 仙台</h5></Link>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>関東地区</Accordion.Header>
        <Accordion.Body>
        <p>東京都</p>
        <Link to={"/CinemaMovies"} state={{Cinema:4}} > <h5>TOHOシネマズ 日比谷</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:5}} >  <h5>TOHOシネマズ 新宿</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:6}} > <h5>TOHOシネマズ 池袋</h5></Link>
        <hr></hr>
        <p>千葉県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:7}} > <h5>TOHOシネマズ 柏</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:8}} > <h5>TOHOシネマズ ららぽーと船橋</h5></Link>
        <hr></hr>
        <p>神奈川県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:9}} > <h5>TOHOシネマズ 海老名</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:10}} >  <h5>TOHOシネマズ ららぽーと横浜</h5></Link>
        <hr></hr>
        <p>埼玉県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:11}} ><h5>TOHOシネマズ ららぽーと富士見</h5></Link>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>中部地区</Accordion.Header>
        <Accordion.Body>
        <p>愛知県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:12}} >  <h5>TOHOシネマズ 赤池</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:13}} ><h5>TOHOシネマズ 津島</h5></Link>
        <hr></hr>
        <p>静岡県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:14}} > <h5>TOHOシネマズ 浜松</h5></Link>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>関西地区</Accordion.Header>

        <Accordion.Body>
        <p>大阪府</p>
        <Link to={"/CinemaMovies"} state={{Cinema:15}} > <h5>TOHOシネマズ 梅田</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:16}} ><h5>TOHOシネマズ くずはモール</h5></Link>
        <hr></hr>
        <p>京都府</p>
        <Link to={"/CinemaMovies"} state={{Cinema:17}} ><h5>TOHOシネマズ 二条</h5></Link>
     
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>中国地区</Accordion.Header>
        <Accordion.Body>
        <p>岡山県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:18}} ><h5>TOHOシネマズ 岡南</h5></Link>
        <hr></hr>
        <p>広島県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:19}} ><h5>TOHOシネマズ 緑井</h5></Link>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>四国地区</Accordion.Header>
        <Accordion.Body>
        <p>高知県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:20}} > <h5>TOHOシネマズ 高知</h5></Link>
        <hr></hr>
        <p>愛媛県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:21}} ><h5>TOHOシネマズ 新居浜</h5></Link>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>九州地区</Accordion.Header>
        <Accordion.Body>
        <p>福岡県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:22}} ><h5>TOHOシネマズ ららぽーと福岡</h5></Link>
        <p></p>
        <Link to={"/CinemaMovies"} state={{Cinema:23}} ><h5>TOHOシネマズ 天神・ソラリア館</h5></Link>
        <hr></hr>
        <p>熊本県</p>
        <Link to={"/CinemaMovies"} state={{Cinema:24}} > <h5>TOHOシネマズ 熊本サクラマチ</h5></Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        

</div>


)


}
export default Cinema;

