import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dayjs from 'dayjs';

  

const MyResurvation = (props) => {

    
  
    const user_no=props.user_no;
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        
        
        axios.post("/myReservation",{
                user_number:user_no
        })
        .then(res=>{
            setposts(res.data);
        })
        .catch(error=>{
            
        })


    },[posts]);

    const cancel=(e)=>{
     const seq= document.getElementById("seq").value;
     const confirm = window.confirm("予約をキャンセルしますか？");
     if (confirm) {
      axios.post("/resurvationDelete",{
        seq:seq
        })
        .then(res=>{
  
         })
      .catch(error=>{

          })
     }
     else{
      e.preventDefault();
     }
   };

    

    return (

<div style={{marginTop:"5%" ,height:"500px"}}>
    <h6 style={{ textDecoration: "underline red", paddingLeft: "8%" }}>予約作品</h6>
    {posts.length==0?
    <div style={{marginTop:"10%" , textAlign:"center"}}>
    <p>予約している作品がないです。</p>
    </div>
    :
    posts.map(post=>
             
             <Card style={{ width: '16rem',float:"left",  marginLeft:"8%",marginTop:"2%"}}>
               <Card.Img variant="top" style={{height:"250px"}} src={`img/${post.poster}`} />
               <Card.Body>
                 <Card.Title>{post.title}</Card.Title>
                 <Card.Text>
                    劇場：{post.cinema}
                   </Card.Text>
                 <Card.Text>
                    予約日付：{dayjs(`${post.reservation_date}`).format('YYYY-MM-DD HH:mm')}
                   </Card.Text>
                   <Link to={`/movieDetail/${post.movie_number}`} state={{seq: post.movie_number}} >
                 <Button variant="danger" style={{width:"100%"} } type="submit">映画情報</Button>
                 </Link>
                 <input type={"hidden"} id="seq" value={post.seq}></input>
                 <Button variant="success" style={{width:"100%"}} onClick={cancel} >予約キャンセル</Button>
               </Card.Body>
             </Card>


            
            )}   
        
    </div>



)





}

export default MyResurvation;