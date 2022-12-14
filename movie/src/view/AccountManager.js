import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";


const AccountManager = () =>{

 const [accounts, setaccounts] = useState([]);   

useEffect(()=>{

  axios.post("/accountList")
  .then(res=>{
    setaccounts(res.data);
  })  
.catch(error=>{
console.log(error);
});


},[]);

const withdrawal = (seq,e)=>{
  const confirm = window.confirm("この会員を強制脱退させますか？");
  if(confirm){
    axios.post("/withdrawal",{ seq : seq})
    .then(res=>{
      
    })
    .catch(error=>{
      console.log(error);
    })
    alert("会員を強制脱退させました。");
    window.location.href="/admin";
  }else{
    e.preventDefault();
  }
}

return(
<div>
<h6 style={{textDecoration:"underline red",paddingLeft:"10%"}}>会員管理</h6>  
<Table striped bordered hover style={{width: "80%", margin:"0 auto",textAlign:"center",marginTop:"3%"}}>
      <thead>
        <tr>
          <th>会員番号</th>
          <th>ニックネーム</th>
          <th>ユーザーID</th>
          <th>名前</th>
          <th>電話番号</th>
          <th>管理</th>
        </tr>
      </thead>
      <tbody>
     {accounts.map(account=> 
        <tr>
          <td>{account.seq}</td>
          <td>{account.nickName}</td>
          <td>{account.e_mail}</td>
          <td>{account.name}</td>
          <td>{account.phone}</td>
          <td><Button variant="success">メッセージ</Button>                       
             <Button variant="danger"type="submit" onClick={()=>withdrawal(account.seq)}>脱退</Button>  
             </td>
        </tr>
      )}
      </tbody>
    </Table>

</div>

)

}

export default AccountManager;