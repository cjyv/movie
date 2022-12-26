import React from "react";
import MovieInsert from "./MovieInsert";
import AccountManager from "./AccountManager";
import Answer from "./Answer"
const Admin = ()=>{
  

    return(
        <div style={{width: "100%" ,height:"auto", margin:"7% auto"}}>
          
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>管理者ページ</h3>  
          <MovieInsert></MovieInsert>
          <AccountManager></AccountManager>
          <Answer></Answer>
        </div>

    );
}

export default Admin;