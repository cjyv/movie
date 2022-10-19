import React, { useEffect, useState } from "react";
import MyResurvation from "./MyResurvation";
import Recommend from "./Recommend";
import axios from "axios";
const MyPage = () =>{

    const [user_no, setUser_no] = useState(0);
    useEffect(()=>{
        axios.post("/userState")
        .then(res => {
          
            setUser_no(res.data[0].seq);
            
        })
        .catch(error => {
          console.log(error);
        });
    },[])
    return(
        <div style={{marginTop:"8%"}}>
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>マイページ</h3>  
        <MyResurvation  user_no={user_no}></MyResurvation>
        <Recommend user_no={user_no}></Recommend>
        </div>

    )
    }



export default MyPage;