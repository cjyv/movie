import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function MyVerticallyCenteredModal(props) {
    const question = props.question;
    const [answer,setAnswer] = useState("");
    const [post,setpost] =useState("");
    
    useEffect(()=>{
        axios.get("/faq/"+question)
        .then(res=>{
            setpost(res.data[0].question);
            setAnswer(res.data[0].answer);
        })
        .catch(error=>{
            console.log(error);
        })
        
       

    },[question])


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        {post!=""?
         post :
         "質問"
        }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>回答</h4>
          <p>
            {answer}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }




const faq=()=>{
 
  const [modalShow, setModalShow] = useState(false);
  const [question,setQuestion]=useState("");
  const [posts, setposts]=useState([]);
  const [myqs, setmyqs]=useState([]);
  const location = useLocation();
  const param = new URLSearchParams(location.search);

    let state = param.get("state");
    if (state==0) {
        alert("ログインしてください");
        document.location.href="/login"
    }else{
        
    }     

    useEffect(()=>{
      axios.get("/faqList")
      .then(res=>{
        setposts(res.data);
  
      })
      .catch(error=>{
        console.log(error);
      })

      
      axios.get("/myFaqList")
      .then(res=>{
        setmyqs(res.data);
     
      })
      .catch(error=>{
        console.log(error);
      })



    },[]);

 
  

return(

  <div style={{marginTop:"8%"}}>
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>ご質問・ご意見</h3>  
        <div style={{marginTop:"5%"}}>
        <h5 style={{textAlign:"center",marginBottom:"2%"}}>よくある質問</h5>
      <ListGroup style={{width:"80%", margin:"0 auto",textAlign:"center"}}>
      <ListGroup.Item action  >
      <div id="faq1" onClick={() => {setModalShow(true),setQuestion(document.getElementById("faq1").innerText) }}>
        予約ができません。
      </div>
      </ListGroup.Item>
      <ListGroup.Item action>
      <div id="faq2" onClick={() => {setModalShow(true),setQuestion(document.getElementById("faq2").innerText) }}>
       会員登録ができません。
       </div>
      </ListGroup.Item >
      <ListGroup.Item action>
      <div id="faq3" onClick={() => {setModalShow(true),setQuestion(document.getElementById("faq3").innerText) }}>
       パスワードを忘れました。
       </div>
      </ListGroup.Item>
      <ListGroup.Item action>
      <div id="faq4" onClick={() => {setModalShow(true),setQuestion(document.getElementById("faq4").innerText) }}>
       クーポンの使い方を教えてください。
       </div>
      </ListGroup.Item>
    </ListGroup>

<div style={{width:"100%",marginBottom:"30%"}}>
  
    <ListGroup style={{width:"45%", marginTop:"3%",marginRight:"2%",float:"right",textAlign:"center"}}>
    <h5 style={{textAlign:"center",marginBottom:"2%"}}>私の質問、意見  <span　onClick={() => {setModalShow(true)}}><img  style={{width:"40px"}} alt="登録"  src="https://illustcenter.com/wp-content/uploads/2021/09/rdesign_12170.png"></img></span></h5>
    {
    myqs.length==0?
    <div style={{marginTop:"10%" , textAlign:"center"}}>
    <p>質問がないです。</p>
    </div>
    :
    myqs.map(myq=>
      <ListGroup.Item action  >
      <div id={myq.question} onClick={() => {setModalShow(true),setQuestion(document.getElementById(myq.question).innerText) }}>
      {myq.question} 
      </div>
      </ListGroup.Item>
      )}
    </ListGroup>

    <ListGroup style={{width:"45%", marginTop:"3%",float:"left",marginLeft:"2%",textAlign:"center"}}>
    <h5 style={{textAlign:"center",marginBottom:"2%"}}>最新質問、意見</h5>
   {posts.map(post=>
      <ListGroup.Item action  >
      <div id={post.question} onClick={() => {setModalShow(true),setQuestion(document.getElementById(post.question).innerText) }}>
      {post.question} 
      </div>
      </ListGroup.Item>
      )} 
    </ListGroup>
    </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        question={question}
      />
        </div>

</div>
)

}

export default faq;