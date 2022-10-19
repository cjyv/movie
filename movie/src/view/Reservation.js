import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from "react-bootstrap";


const Reservation = () => {

    const location = useLocation();
    

    const [posts, setposts] = useState([]);
    const [name, setname] = useState("");
    const [e_mail, sete_mail] = useState("");
    const movie_number = location.state.seq;
    const usernumber = location.state.usernumber;

    useEffect(() => {
        console.log(usernumber)
        if (usernumber == null) {
            alert("ログインしてください。");
            window.location.href = "/login";
        }



        axios.get("/movieDetail/" + movie_number)
            .then(res => {
                setposts(res.data)

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

    }, [])
    
    const reservationCheck = (e) => {
        
        const  name= document.getElementsByName("name")[0].value;
        const e_mail = document.getElementsByName("e_mail")[0].value;
        const date = document.getElementsByName("date")[0].value;
        const time = document.getElementsByName("time")[0].value;
        const datetime = date+" "+time;
        const cinema =document.getElementsByName("cinema")[0].value;

        if(name===""||e_mail===""||date===null||time===null){
            if(e_mail===""&&name!==""||cinema!==""){
                e.preventDefault();
                alert("メールアドレスを記入してください。");
                document.getElementById("e_mail").focus();
            }else if(e_mail!==""&&name===""){
                e.preventDefault();
                alert("名前を記入してください。");
                document.getElementById("name").focus();
            }else{
                e.preventDefault();
                alert("予約者情報を記入してください。");
            }
        }
        else{
            
                axios.post("/reservation",{
                    movie_number: movie_number,
                    cinema: cinema,
                    user_number: usernumber,
                    reservation_date: datetime
                }).then(res=>{
                    
                    
                }).catch(error=>{
                    console.log(error)
                });
                alert("予約完了しました。");
        }

    };

    return (

        <div style={{ width: "100%", height: "1200px", margin: "7% auto" }}>
            <h3 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>予約ページ</h3>
            <Form style={{ width: "50%", margin: "0 auto", marginTop: "4%", padding: "40px 50px", backgroundColor: "rgb(245, 245, 245)" }} action="/myPage" onSubmit={reservationCheck}>

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
   <Form.Select aria-label="Default select example" name="cinema" id="cinema">
 <option>選択</option>
 <option value="新宿店">新宿店</option>
 <option value="渋谷店">渋谷店</option>
 <option value="難波駅店">難波駅店</option>
 <option value="博多駅店">博多駅店</option>
 <option value="広島本通店">広島本通店</option>
</Form.Select>
 </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2" style={{ textAlign: "left" }}>
                        <Form.Label>日付</Form.Label>
                        <Form.Control name="date" id="date" type="date" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="formGridAddress2" style={{ textAlign: "left" }}>
                        <Form.Label>時間</Form.Label>
                        <Form.Control name="time" id="time" type="time" min="08:00" max="23:00" />
                    </Form.Group>
                </Row>

                        <Button variant="danger" style={{ width: "80%", display: "block", margin: "auto", height: "60px", marginTop: "5%" }} type="submit">
                            予約
                        </Button>
            </Form>
        </div>



)
}
export default Reservation;
  