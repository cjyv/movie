import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Login=()=>{


const loginCheck=(e)=>{
   
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    if (email === "" || password === "") {
        if (email === ""&&password !== "") {
            alert("メールアドレスを記入してください");
            document.getElementById("email").focus();
        } else if (password === ""&&email !== "") {
            alert("パスワードを記入してください");
            document.getElementById("password").focus();
        } 
        else {
            alert("メールアドレスとパスワードを記入してください。");
        }
        
        e.preventDefault();
    }else{
      axios.post("/loginCheck",{
        e_mail:email,
        password: password
      })
      .then(res=>{
        
        if(`${res.data[0].count}`==0){
    
          e.stopPropagation();
          window.location.href="/Login";
          alert("登録されてない会員です。");
          
        }else{
          
          window.location.href="/";
          alert(`ようこそ ${res.data[0].nickName}様`);
        
        }
      })
      .catch(error=>{
        console.log(error)
      })

    }

}


    return(
   
          
        <div style={{width: "100%" ,height:"600px", margin:"7% auto"}}>
  
<h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>ログインページ</h3>           
 <Form style={{width: "50%", margin:"0 auto",marginTop:"1%",padding:"25px 50px",backgroundColor:"rgb(245, 245, 245)"} } action="/" onSubmit={loginCheck}>
    <div style={{textAlign:"center"}}>
 <Image src="https://www.kururu.co.jp/wp-content/uploads/2022/02/shop_logo_toho_cinema.png"　style={{width:"50%",marginBottom:"1%"}}></Image>
 </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>メールアドレス</Form.Label>
        <Form.Control name="email" id="email" type="email" placeholder="Enter email" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>パスワード</Form.Label>
        <Form.Control name="password" id="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="次回から自動的にログイン" />
      </Form.Group>
   
      <div style={{textDecoration: "none",color:"white"}}>
      <Button variant="danger" style={{width:"80%",display:"block",margin:"auto",height:"60px",marginTop:"5%"}} type="submit">
        ログイン
      </Button>
      </div>
    </Form>
    <div style={{marginTop:"3%",textAlign:"center"}}>
        <p>*会員ではない方は会員加入してください。</p>
        <Link to={"/SignUp"} style={{textDecoration: "none",color:"white"}}>
        <Button variant="success" type="submit" style={{width:"30%",margin:"auto",height:"60px",display:"block"}}>新規会員申し込み</Button>
        </Link>
    </div>
    </div>
       



    );


}

export default Login;