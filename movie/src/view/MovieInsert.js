import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieInsert = () =>{

    const insert = (e) =>{
        const fmt = new FormData();
      
          const title = document.getElementsByName("title")[0].value;
          const director = document.getElementsByName("director")[0].value;
          const actor = document.getElementsByName("actor")[0].value;
          const  content= document.getElementsByName("content")[0].value;
         ;
          const genre = document.getElementsByName("genre")[0].value;
          const release_date = document.getElementsByName("release_date")[0].value;
          const slide = document.getElementById("slide").value;
        fmt.append("title",title);
        fmt.append("director",director);
        fmt.append("actor",actor);
        fmt.append("content",content);
        for (let i = 0; i < 2; i++) {
          fmt.append("poster",document.getElementsByName("poster")[i].files[0]);
          
        }
        
     
        fmt.append("genre",genre);
        fmt.append("release_date",release_date);
  
        
        
          if (title === "" || director === ""||actor === ""||content === ""
          ||poster === ""||genre === ""||release_date === ""||slide ==="") {
            e.stopPropagation();
              alert("記入してないところがございます。ご確認ください。");
          }
          else{
              axios.post('/movieInsert',fmt,{
                headers:{
                  'content-type': 'multipart/form-data'
                }
              }
              ).then(res=>{
                  
              }).catch(error=>{
                console.log(error);
              })
              alert("upload success");
          }
          
      }


    return(
        <div style={{width: "100%" ,height:"900px", margin:"7% auto"}}>
        <h6 style={{textDecoration:"underline red",paddingLeft:"15%"}}>作品追加</h6>  
<Form　style={{width: "50%", margin:"0 auto",marginTop:"4%",padding:"40px 50px",backgroundColor:"rgb(245, 245, 245)"}  }>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>作品名</Form.Label>
   <Form.Control type="text" name="title" id="title" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>監督</Form.Label>
   <Form.Control type="text"  name="director" id="director"/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>出演</Form.Label>
   <Form.Control type="text"  name="actor" id="actor" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>ジャンル</Form.Label>
   <Form.Select aria-label="Default select example" name="genre" id="genre">
 <option>選択</option>
 <option value="action">action</option>
 <option value="thriller">thriller</option>
 <option value="horror">horror</option>
 <option value="anime">anime</option>
 <option value="romance">romance</option>
 <option value="romance">comedy</option>
 <option value="romance">SF</option>
 <option value="romance">Fantasy</option>
</Form.Select>
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>リリース</Form.Label>
   <Form.Control type="date" name="release_date" id="release_date" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
   <Form.Label>内容</Form.Label>
   <Form.Control as="textarea" rows={3} name="content" id="content"/>
 </Form.Group>
 <Form.Group controlId="formFile" className="mb-3">
   <Form.Label>ポスター</Form.Label>
   <Form.Control type="file" name="poster" id="poster"/>
   <Form.Label>スライド用ポスター</Form.Label>
   <Form.Control type="file" name="poster" id="slide"/>
 </Form.Group>
 <Link to={"/"} style={{textDecoration: "none",color:"white"}} >
<div onClick={insert}>
 <Button variant="danger"  style={{width:"80%",display:"block",margin:"auto",height:"60px",marginTop:"5%"}}   type="submit">
   登録
 </Button>
 </div>
</Link>
</Form>


   </div>


    )


}

export default MovieInsert;