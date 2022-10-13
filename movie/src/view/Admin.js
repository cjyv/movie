import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieInsert from "./MovieInsert";
import AccountManager from "./AccountManager";
const Admin = ()=>{

    return(
        <div style={{width: "100%" ,height:"1500px", margin:"7% auto"}}>
          
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>管理者ページ</h3>  
          <MovieInsert></MovieInsert>
          <AccountManager></AccountManager>
        </div>

    );
}

export default Admin;