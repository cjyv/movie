import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';




const Reservation = () => {

    const location = useLocation();
    const navigate = useNavigate();
    

    const [posts, setposts] = useState([]);
    const [name, setname] = useState("");
    const [e_mail, sete_mail] = useState("");
    const [cinema,setcinema]= useState(null);
    const [title,settitle]=useState("");
    const [poster,setposter]=useState("");
    const [schedule,setschedule] = useState([]);

  
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate();

  
    
    const now = year+"-"+month+"-"+day;
    
  
    
    if(location.state.cinema!=null){
        setcinema(location.state.cinema);
    }

    const movie_number = location.state.seq;
    const usernumber = location.state.usernumber;
    const cinema_no = location.state.cinema_no;



    useEffect(() => {
       
        if (usernumber == null) {
            alert("ログインしてください。");
            window.location.href = "/login";
        }



        axios.get("/movieDetail/" + movie_number)
            .then(res => {
                setposts(res.data);
                setposter(res.data[0].poster);
                settitle(res.data[0].title);

            }).catch(error => {
                console.log(error);
            });

        axios.post("/userInfo",
            {
                seq: usernumber

            })
            .then(res => {
                setname(res.data[0].name);
                sete_mail(res.data[0].e_mail);
            }).catch(error => {
                console.log(error);
            })

    }, []);





    const dateChange=()=>{
        const cinema =document.getElementById("cinema").value;
        const date = document.getElementsByName("date")[0].value;
       
        if(date!="" &&cinema!=null){
            axios.get("/cinemaScedule/"+movie_number+"/"+cinema+"/"+date)
            .then(res=>{
                setschedule(res.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    };
 

    
    const reservationCheck = (stime,croom) => {
       
        const time =stime;
        const cinema_room=croom;
        const  name= document.getElementsByName("name")[0].value;
        const e_mail = document.getElementsByName("e_mail")[0].value;
        const date = document.getElementsByName("date")[0].value;
        const cinema =document.getElementById("cinema").value;
        const cinematext =document.getElementById("cinema");

        const reservation_date = date+" "+time; 
        const cinemaName =  cinematext.options[cinematext.selectedIndex].text;
       

    
        if(name===""||e_mail===""||cinema===null||date===""){
            if(e_mail===""){
           
                alert("メールアドレスを記入してください。");
                document.getElementById("e_mail").focus();
            }else if(name===""){
            
                alert("名前を記入してください。");
                document.getElementById("name").focus();
            }else if(cinema==0){
            
                alert("劇場を選択してください。");
                document.getElementById("cinema").focus();
            }
            else if(date===""){
               
                alert("日付を選択してください。");
                document.getElementById("date").focus();
            }else if(cinema_room===""||time===""){
             
                alert("上映時間を選択してください。");
            }
            else{
                e.preventDefault();
                alert("予約者情報を記入してください。");
            }
        }else{
            const confirm = window.confirm("この時間帯で予約しますか？");
            if (confirm) {
                navigate('/CinemaSeat',{state:{name:name,e_mail:e_mail,reservation_date:reservation_date,cinema:cinema,movie_number:movie_number,user_number:usernumber,cinema_room:cinema_room,title:title,poster:poster,cinemaName:cinemaName}})

            }
        }
        

    };
   
      


 


    return (

        <div style={{ width: "100%", height: "auto", margin: "7% auto" }}>
            <h3 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>予約ページ</h3>
            <Form style={{ width: "50%", margin: "0 auto", marginTop: "4%", padding: "40px 50px", backgroundColor: "rgb(245, 245, 245)" }} >

                <Row>
                    <h6 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>予約作品</h6>
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridEmail" style={{ textAlign: "center" }}>
                        {posts.map(post => <Image style={{ width: "65%", height: "350px" }} src={"../img/" + `${post.poster}`}></Image>)}
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridAddress1" style={{ textAlign: "center" }}>
                        {posts.map(post => <h4>{post.title}</h4>)}
                    </Form.Group>

                    <Row>
                        <h6 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>予約者情報</h6>
                    </Row>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridAddress2" style={{ textAlign: "left" }}>

                        <Form.Label>名前</Form.Label>
                        <Form.Control name="name" id="name" type="text" defaultValue={name}></Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridAddress2" style={{ textAlign: "left" }}>

                        <Form.Label>メールアドレス</Form.Label>
                        <Form.Control name="e_mail" id="e_mail" type="text" defaultValue={e_mail}></Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>劇場</Form.Label> 
   <Form.Select aria-label="Default select example" name="cinema" id="cinema" defaultValue={cinema_no} onChange={dateChange} >
 <option value="0">選択</option>
 <option value="1">TOHOシネマズ おいらせ下田</option>
 <option value="2">TOHOシネマズ 秋田</option>
 <option value="3">TOHOシネマズ 仙台</option>
 <option value="4">TOHOシネマズ 日比谷</option>
 <option value="5">TOHOシネマズ 日比谷</option>
 <option value="6">TOHOシネマズ 池袋</option>
 <option value="7">TOHOシネマズ 柏</option>
 <option value="8">TOHOシネマズ ららぽーと船橋</option>
 <option value="9">TOHOシネマズ 海老名</option>
 <option value="10">TOHOシネマズ ららぽーと横浜</option>
 <option value="11">TOHOシネマズ ららぽーと富士見</option>
 <option value="12">TOHOシネマズ 赤池</option>
 <option value="13">TOHOシネマズ 津島</option>
 <option value="14">TOHOシネマズ 浜松</option>
 <option value="15">TOHOシネマズ 梅田</option>
 <option value="16">TOHOシネマズ くずはモール</option>
 <option value="17">TOHOシネマズ 二条</option>
 <option value="18">TOHOシネマズ 岡南</option>
 <option value="19">TOHOシネマズ 緑井</option>
 <option value="20">TOHOシネマズ 高知</option>
 <option value="21">TOHOシネマズ 新居浜</option>
 <option value="22">TOHOシネマズ ららぽーと福岡</option>
 <option value="23">TOHOシネマズ 天神・ソラリア館</option>
 <option value="24">TOHOシネマズ 熊本サクラマチ</option>
</Form.Select>
 </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2" style={{ textAlign: "left" }}>
                        <Form.Label>日付</Form.Label>
                        <Form.Control name="date" id="date" type="date" min={now} onChange={dateChange}/>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2" style={{ textAlign: "left"}}>
                            <Form.Label>時間帯</Form.Label>
                               <hr></hr>
                        {schedule!=""?
                        schedule.map(schedules=>

            <Button type="button" variant="outline-success" onClick={()=>{reservationCheck(schedules.start_time,schedules.cinema_room)}} style={{ width: '12rem',height:'100px', float:"left",  marginLeft:"8%",marginTop:"5%"}}>{schedules.cinema_room}号館　
            <br></br>
            {schedules.start_time} ~ {schedules.end_time}
            </Button>
           
                        )
                        : <div>
                          <h5>  上映予定がない日付です。申し訳ございません。</h5>
                        </div>
                    }
                    </Form.Group>
                    </Row>
                  
            </Form>
        </div>



)
}
export default Reservation;
  