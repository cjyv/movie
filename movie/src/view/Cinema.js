import React from "react";
import Accordion from 'react-bootstrap/Accordion';
const Cinema = () =>{
return(

<div style={{marginTop:"8%",height:"auto"}}>
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>劇場一覧</h3>  

        <Accordion style={{width:"80%",margin:"0 auto",marginTop:"3%"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>東北地区</Accordion.Header>
        <Accordion.Body>
        <p>青森県</p>
        <h5>TOHOシネマズ おいらせ下田</h5>
        <hr></hr>
        <p>秋田県</p>
        <h5>TOHOシネマズ 秋田</h5>
        <hr></hr>
        <p>宮城県</p>
        <h5>TOHOシネマズ 仙台</h5>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>関東地区</Accordion.Header>
        <Accordion.Body>
        <p>東京都</p>
        <h5>TOHOシネマズ 日比谷</h5>
        <p></p>
        <h5>TOHOシネマズ 新宿</h5>
        <p></p>
        <h5>TOHOシネマズ 池袋</h5>
        <hr></hr>
        <p>千葉県</p>
        <h5>TOHOシネマズ 柏</h5>
        <p></p>
        <h5>TOHOシネマズ ららぽーと船橋</h5>
        <hr></hr>
        <p>神奈川県</p>
        <h5>TOHOシネマズ 海老名</h5>
        <p></p>
        <h5>TOHOシネマズ ららぽーと横浜</h5>
        <hr></hr>
        <p>埼玉県</p>
        <h5>TOHOシネマズ ららぽーと富士見</h5>
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>中部地区</Accordion.Header>
        <Accordion.Body>
        <p>愛知県</p>
        <h5>TOHOシネマズ 赤池</h5>
        <p></p>
        <h5>TOHOシネマズ 津島</h5>
        <hr></hr>
        <p>静岡県</p>
        <h5>TOHOシネマズ 浜松</h5>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>関西地区</Accordion.Header>

        <Accordion.Body>
        <p>大阪府</p>
        <h5>TOHOシネマズ 梅田</h5>
        <p></p>
        <h5>TOHOシネマズ くずはモール</h5>
        <hr></hr>
        <p>京都府</p>
        <h5>TOHOシネマズ 二条</h5>
     
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>中国地区</Accordion.Header>
        <Accordion.Body>
        <p>岡山県</p>
        <h5>TOHOシネマズ 岡南</h5>
        <hr></hr>
        <p>広島県</p>
        <h5>TOHOシネマズ 緑井</h5>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>四国地区</Accordion.Header>
        <Accordion.Body>
        <p>高知県</p>
        <h5>TOHOシネマズ 高知</h5>
        <hr></hr>
        <p>愛媛県</p>
        <h5>TOHOシネマズ 新居浜</h5>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>九州地区</Accordion.Header>
        <Accordion.Body>
        <p>福岡県</p>
        <h5>TOHOシネマズ ららぽーと福岡</h5>
        <p></p>
        <h5>TOHOシネマズ 天神・ソラリア館</h5>
        <hr></hr>
        <p>熊本県</p>
        <h5>TOHOシネマズ 熊本サクラマチ</h5>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        

</div>


)


}
export default Cinema;

