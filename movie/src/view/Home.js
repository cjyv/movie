import React, { useEffect, useState } from "react";
import {Carousel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import axios from "axios";

const Home= () =>{

  const [posts, setposts] = useState([]);
  const [photos, setphotos] = useState([]);

  useEffect(()=>{
    
    axios.get("/movieRank")
    .then(res=>{
      setposts(res.data);
    }).catch(error=>{
      console.log(error);
    })

  },[])

  useEffect(()=>{
    axios.get("/slide")
    .then(res=>{
      setphotos(res.data);
    }).catch(error=>{
      console.log(error);
    })

  },[])

    return(
            <div>
<Carousel style={{width: "80%", margin:"7% auto"}}>
{photos.map(photo=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"../img/" + `${photo.slide}`}
          alt="First slide"
        />
      </Carousel.Item>
          )}
    </Carousel>

    <Table striped style={{width: "80%", margin:"5% auto", textAlign:"center"}}>
      <thead>
        <tr>
          <th><img src="https://cdn-icons-png.flaticon.com/512/5650/5650367.png" width={"15px"}></img> 予約ランキング</th>
          <th>映画名</th>
          <th>監督</th>
          <th>主演</th>
          <th>予約数</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post=>
        <tr>
          <td>{post.ranking}</td>
          <td>{post.title}</td>
          <td>{post.director}</td>
          <td>{post.actor}</td>
          <td>{post.count}</td>
        </tr>
        )}
      </tbody>
    </Table>
    <div  className="d-flex justify-content-around" style={{margin:"0 auto"}}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://animeanime.jp/imgs/p/rQC-FVStleeQ4uCDm4cdn6GgF60oy6_oqaqr/504765.jpg" />
      <Card.Body>
        <Card.Title>「ONE PIECE FILM RED」映画オリジナルキャラクター役で山田裕貴＆霜降り明星が出演！</Card.Title>
        <Card.Text>
        アニメ『ワンピース』の劇場版最新作『ONE PIECE FILM RED』が、2022年8月6日に公開を迎える。このたび本作に
        </Card.Text>
        <Button variant="primary" style={{width:"100%"}}>詳細</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" height={"215px"} src="https://newsatcl-pctr.c.yimg.jp/t/amd-img/20220808-09755014-mnet-000-2-view.jpg?pri=l&w=640&h=398&exp=10800" />
      <Card.Body>
        <Card.Title>LiSA、TOHOシネマズなんばにて期間限定オープンする“ミニオンズシアター”で特別舞台挨拶</Card.Title>
        <Card.Text>
        TOHOシネマズ渋谷で大盛況のうちに終了した“ミニオンズシアター”。グッズも売り切れが続出し、
        </Card.Text>
        <Button variant="primary" style={{width:"100%"}}>詳細</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" height={"215px"} src="https://www.tohotheater.jp/include/home/mainVisual/images/54_common_tc_rotation_746_420.png" />
      <Card.Body>
        <Card.Title>毎日対像の映画が1100円で見られる
        </Card.Title>
        <Card.Text>
        TOHOシネマズの特別割引イベントを開催することを9月30日に発表、様々な声が出ているようだ。一般的な反応はかなり好評である。だが
        </Card.Text>
        <Button variant="primary"style={{width:"100%"}}>詳細</Button>
      </Card.Body>
    </Card>   

    
    
    </div>

            </div>


    );


}

export default Home;