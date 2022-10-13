import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom"

const SignUp=()=>{



const SignUpCheck=(e)=>{
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    const nickName = document.getElementsByName("nickName")[0].value;
    const  name = document.getElementsByName("name")[0].value;
    const number1 = document.getElementsByName("number1")[0].value;
    const number2 = document.getElementsByName("number2")[0].value;
    const number3 = document.getElementsByName("number3")[0].value;

    if (email === "" || password === ""||nickName === ""||name === ""
    ||number1 === ""||number2 === ""||number3 === "") {
        alert("記入してないところがございます。ご確認ください。")
        e.preventDefault();
    }
    else{
         axios.post('/signUpCheck',{email: email})
         .then(res=>{
            if(res.data[0].count<1){
   axios.post('/SignUp',{
            email: email,
            password: password,
            nickName: nickName,
            name: name,
            number: number1+number2+number3
        })
        .then(res=>{
      })
      .catch(error=>{
        console.log(error);
      })
      alert("会員登録しました。これからよろしくお願いします。");
    }
    else{
      e.stopPropagation();
      alert("もう登録されたメールアドレスです。");
      window.location.href="/SignUp";

       }     
         })

     
    }

}






return(
    <div style={{width: "100%" ,height:"600px", margin:"7% auto"}}>
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>会員登録</h3>  
<Form style={{width: "50%", margin:"0 auto",marginTop:"4%",padding:"40px 50px",backgroundColor:"rgb(245, 245, 245)"} }>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control name="email" id="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" >
          <Form.Label>パスワード</Form.Label>
          <Form.Control name="password" id="password" type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>名前</Form.Label>
        <Form.Control name="name" id="name" placeholder="ex) 木村拓哉" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>ニックネーム</Form.Label>
        <Form.Control name="nickName" id="nickName" placeholder="ex)キムタク" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridphone">
          <Form.Label>電話番号</Form.Label>
          <Row>
         <Col xs={2}> <Form.Control name="number1" id="number1"/> </Col>
          - <Col xs={2}> <Form.Control name="number2" id="number2"/> </Col> 
          - <Col xs={2}> <Form.Control name="number3" id="number3"/> </Col>
          </Row>
          </Form.Group>
      </Row>
      <Link to={"/"} style={{textDecoration: "none",color:"white"}}>
      <Button onClick={SignUpCheck} variant="danger"  style={{width:"80%",display:"block",margin:"auto",height:"60px",marginTop:"5%"}}   type="submit">
        登録
      </Button>
      </Link>
 
    </Form>
</div>

)


}

export default SignUp;