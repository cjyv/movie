import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

const Recommend = (props) =>{
const user_no = props.user_no;
const [posts,setposts] = useState([]);

useEffect(()=>{

    axios.post("/recomend",{
        user_number : user_no
    }).then(res=>{
        setposts(res.data);
    }).catch(error=>{
        console.log(error);
    })


},[user_no]);

return(
    <div style={{marginTop:"5%" ,height:"500px"}}>
    <h6 style={{ textDecoration: "underline red", paddingLeft: "8%" }}>おすすめの作品</h6> 
     {posts.map(post=>
                  
                  <Card style={{ width: '16rem',float:"left",  marginLeft:"8%",marginTop:"2%"}}>
                  <Card.Img variant="top" style={{height:"250px"}} src={`img/${post.poster}`} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                   監督：{post.director}
                    </Card.Text>
                    <Card.Text>
                       出演：{post.actor}
                      </Card.Text>
                      <Link to={`/movieDetail/${post.seq}`} state={{seq: post.seq }} >
                    <Button variant="danger" style={{width:"100%"} } type="submit">詳細</Button>
                    </Link>
                  </Card.Body>
                </Card>
   
             


            
            )}   
    </div>
)

}
export default Recommend;

