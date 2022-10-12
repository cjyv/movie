import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dayjs from 'dayjs';

const MyResurvation = () => {

    const [user_no, setUser_no] = useState(0);
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        axios.post("/userState")
        .then(res => {
          
            setUser_no(res.data[0].seq);
            
        })
        .catch(error => {
          console.log(error);
        });
        
        axios.post("/myReservation",{
                user_number:user_no
        })
        .then(res=>{
            setposts(res.data);
        })
        .catch(error=>{
            
        })


    },[user_no])



    return (

<div style={{marginTop:"5%" ,height:"500px"}}>
    <h6 style={{ textDecoration: "underline red", paddingLeft: "8%" }}>予約作品</h6>
    {posts.map(post=>
             
             <Card style={{ width: '16rem',float:"left",  marginLeft:"8%",marginTop:"2%"}}>
               <Card.Img variant="top" style={{height:"250px"}} src={`img/${post.poster}`} />
               <Card.Body>
                 <Card.Title>{post.title}</Card.Title>
                 <Card.Text>
                    予約日付：{dayjs(`${post.reservation_date}`).format('YYYY-MM-DD HH:mm')}
                   </Card.Text>
                   <Link to={`/movieDetail/${post.movie_number}`} state={{seq: post.movie_number}} >
                 <Button variant="danger" style={{width:"100%"} } type="submit">映画情報</Button>
                 </Link>
               </Card.Body>
             </Card>


            
            )}   
        
    </div>



)




}

export default MyResurvation;