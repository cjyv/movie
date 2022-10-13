import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Image } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';


const MovieUpdate = () => {

    const [posts, setposts] = useState([]);
    const location = useLocation();
    const seq = location.state.seq;

    useEffect(() => {
        axios.get("/movieDetail/" + seq)
            .then(res => {
                setposts(res.data)

            }).catch(error => {
                console.log(error);
            });
    }, []);

const update=(e)=>{
    const fmt = new FormData();
      
    const seq = document.getElementsByName("seq")[0].value;
    const title = document.getElementsByName("title")[0].value;
    const director = document.getElementsByName("director")[0].value;
    const actor = document.getElementsByName("actor")[0].value;
    const  content= document.getElementsByName("content")[0].value;
    const poster = document.getElementById("poster").files[0];
    const genre = document.getElementsByName("genre")[0].value;
    const release_date = document.getElementsByName("release_date")[0].value;
    const hiddenPoster =document.getElementsByName("hiddenPoster")[0].value;

    fmt.append("seq",seq);
    fmt.append("title",title);
    fmt.append("director",director);
    fmt.append("actor",actor);
    fmt.append("content",content);
    fmt.append("poster",poster);
    fmt.append("genre",genre);
    fmt.append("release_date",release_date);
    fmt.append("hiddenPoster",hiddenPoster);

    axios.post('/movieUpdate',fmt,{
        headers:{
          'content-type': 'multipart/form-data'
        }
      }
      ).then(res=>{
          
      }).catch(error=>{
        console.log(error);
      })
      alert("update success");
    
}

    return (
        <div style={{ width: "100%", height: "1600px", margin: "7% auto" }}>
            <h3 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>作品情報修正</h3>
            <Form style={{ width: "50%", margin: "0 auto", marginTop: "4%", padding: "40px 50px", backgroundColor: "rgb(245, 245, 245)" }}>
            <Form.Group className="mb-3" controlId="formGridEmail" style={{ textAlign: "center" }}>
                        {posts.map(post => <Image style={{ width: "65%", height: "350px" }} src={"../img/" + `${post.poster}`}></Image>)}
                    </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>作品名</Form.Label>
                    {posts.map(post => <Form.Control type="text" name="title" id="title" defaultValue={post.title} />)}
                    {posts.map(post => <Form.Control type="hidden" name="seq" id="seq" defaultValue={post.seq} />)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>監督</Form.Label>
                    {posts.map(post => <Form.Control type="text" name="director" id="director" defaultValue={post.director} />)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>出演</Form.Label>
                    {posts.map(post => <Form.Control type="text" name="actor" id="actor" defaultValue={post.actor} />)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ジャンル</Form.Label>
                    {posts.map(post => <Form.Select aria-label="Default select example" name="genre" id="genre" defaultValue={post.genre}>
                        <option>選択</option>
                        <option value="action">action</option>
                        <option value="thriller">thriller</option>
                        <option value="horror">horror</option>
                        <option value="anime">anime</option>
                        <option value="romance">romance</option>
                    </Form.Select>)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>リリース</Form.Label>
                    {posts.map(post => <Form.Control type="date" name="release_date" id="release_date" defaultValue={dayjs(`${post.release_date}`).format('YYYY-MM-DD')} />)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>内容</Form.Label>
                    {posts.map(post => <Form.Control as="textarea" rows={3} name="content" id="content" defaultValue={post.content} />)}
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>ポスター</Form.Label>
                    <Form.Control type="file" name="poster" id="poster" />
                    {posts.map(post=><Form.Control type="hidden" name="hiddenPoster" id="hiddenPoster" value={post.poster} />)}
                </Form.Group>
                <Link to={"/"} style={{ textDecoration: "none", color: "white" }} >
                    <Button onClick={update} variant="success" style={{ width: "80%", display: "block", margin: "auto", height: "60px", marginTop: "5%" }} type="submit">
                        修正
                    </Button>
                </Link>
            </Form>
        </div>

    )

}
export default MovieUpdate;