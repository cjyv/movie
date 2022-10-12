import React from "react";

const Company = () =>{

return(
    <div style={{marginTop:"8%"}}>
    <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>企業情報</h3>   
    <div style={{margin:"0 auto", marginTop:"5%", textAlign:"center",border:"3px solid black", width:"60%"}}>
        <h5>企業理念</h5>
       <img src="https://www.tohocinemas.co.jp/company/images/tc_sphere.jpg" style={{paddingBottom:"30px"}}></img> 
    </div>
    <div style={{margin:"0 auto", marginTop:"5%",  border:"3px solid black", width:"60%"}}>
        <h5 style={{textAlign:"center"}}>基本理念</h5>
        <div style={{paddingLeft:"3%"}}>
       <h4 style={{color:"red"}}>GOOD MEMORIES</h4>
       <p>私たちのビジネスは、劇場にお越しいただいたお客様が、その時間その空間を味わうことでサティスファクション（満足）を覚え、良い思い出づくりができるような、次回にもつながるサービスを提供することです。</p>
       </div>
    </div>
    <div style={{margin:"0 auto", marginTop:"5%", border:"3px solid black", width:"60%"}}>
        <h5 style={{textAlign:"center"}}>経営理念</h5>
        <div style={{paddingLeft:"3%"}}>
       <h4 style={{color:"red"}}>Building Dreams Into Reality With Courage And Integrity･･･</h4>
       <p>TOHOシネマズ株式会社は、人の心を世界に開き、そして文化のバロメーターである映画を通じて、日本の文化を、そして社会を変えていきます。勇気と誠実さを持って、常に変化する顧客ニーズに対応し続けることで、革新的なサービスと新しいビジネスを生み出します。
TOHOシネマズは日本のそして世界の映画産業をリードします･･</p>
       <h4 style={{color:"red"}}>And Having Fun While Doing It!!</h4>
       </div>
    </div>
    <div style={{margin:"0 auto", marginTop:"5%", textAlign:"center",border:"3px solid black", width:"60%"}}>
        <h5>運営理念</h5>
       <img src="https://www.tohocinemas.co.jp/company/images/image_philosophy1.gif"　style={{paddingBottom:"15px"}}></img> 
       <img src="https://www.tohocinemas.co.jp/company/images/image_philosophy2.gif" style={{paddingBottom:"30px"}}></img> 
    </div>

    </div>
)


}

export default Company;