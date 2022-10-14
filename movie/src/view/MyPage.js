import React  from "react";
import MyResurvation from "./MyResurvation";
import Recommend from "./Recommend";
const MyPage = () =>{

    return(
        <div style={{marginTop:"8%"}}>
        <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>マイページ</h3>  
        <MyResurvation></MyResurvation>
        <Recommend></Recommend>
        </div>

    )
    }



export default MyPage;