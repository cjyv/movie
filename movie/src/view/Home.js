import React from "react";
import {Carousel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap'

const Home= () =>{


    return(
            <div>
<Carousel style={{width: "80%", margin:"7% auto"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tohotheater.jp/include/home/mainVisual/images/main_slide_onepiecefilm-red.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tohotheater.jp/include/home/mainVisual/images/main_slide_chinmonku-parade.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tohotheater.jp/include/home/mainVisual/images/main_slide_soremori-movie.jpg"
          alt="Third slide"
        />

    
      </Carousel.Item>
    </Carousel>

    <Table striped style={{width: "80%", margin:"5% auto"}}>
      <thead>
        <tr>
          <th><img src="https://cdn-icons-png.flaticon.com/512/5650/5650367.png" width={"15px"}></img>映画ランキング</th>
          <th>映画名</th>
          <th>監督</th>
          <th>主演</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>One Piece Film: Red</td>
          <td>谷口 悟朗</td>
          <td>田中真弓、中井和哉、岡村明美 etc</td>
        </tr>
        <tr>
          <td>2</td>
          <td>沈黙のパレード</td>
          <td>西谷 弘</td>
          <td>福山雅治　柴咲コウ・北村一輝 etc</td>
        </tr>
        <tr>
          <td>3</td>
          <td >"それ"がいる森</td>
          <td>中田秀夫</td>
          <td>相葉雅紀、松本穂香、上原剣心 etc</td>
        </tr>
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