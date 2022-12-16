import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
const answer=()=>{

    const [questions, setquestions] = useState([]);
    const [post,setpost] = useState("");
    const [seq,setseq] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    
      
 


    useEffect(()=>{
        axios.get("/noAnswerList")
        .then(res=>{
            console.log(res);
            setquestions(res.data);
        })
        .catch(error=>{
            console.log(error);
        })

    },[]);

    const answerUpdate=(e)=>{
        const answer= document.getElementsByName("answer")[0].value;
        const seq= document.getElementsByName("seq")[0].value;
       
        axios.post("/answerUpdate",{
            seq: seq,
            answer: answer

        })
        .then(res=>{
        })
        .catch(error=>{
            console.log(error);
        })
        const confirm = window.confirm("回答を登録しますか？");
        if(confirm){

            handleClose();
            window.location.reload();
        }
        else{
            e.preventDefault();
        }
    }
    
    
    return(


<div style={{marginTop:"3%"}}>
<h6 style={{textDecoration:"underline red",paddingLeft:"10%"}}>回答待ち質問</h6>  
    <div style={{marginTop:"3%" , textAlign:"center"}}>
    <Table bordered style={{width: "80%", margin:"0 auto",textAlign:"center",marginTop:"3%"}}>
<thead>
    <tr>
        <th style={{width:"80%"}}>質問</th>
        <th style={{width:"20%"}}>回答</th>
    </tr>
</thead>
<tbody>
{questions.length==0?
<tr>
  <td colSpan={2}>回答待ちの質問がないです。</td>
  </tr>
  :null
}
  
    

  {questions.length==0? null:
 
    questions.map(question=>
    <tr>
        <td>{question.question}</td>
        <td>


            <Button variant="success" onClick={()=>{setShow(true),setseq(question.seq),setpost(question.question)}}>回答</Button></td>
</tr>
)
}
</tbody>
</Table>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{post}</Modal.Title>
        </Modal.Header>
        <Modal.Body><textarea name="answer" style={{width:"100%",height:"200px"}}></textarea></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            キャンセル
          </Button>
            <input type={"hidden"} name="seq" value={seq}></input>
          <Button variant="primary" onClick={answerUpdate}>
            登録
          </Button>
        </Modal.Footer>
      </Modal>

</div>

</div>


)



}

export default answer;