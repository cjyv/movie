import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import dayjs from 'dayjs';
import { Button } from "react-bootstrap";

const MovieDetail = () => {

  const [nickName, setnickName] = useState("");
  const location = useLocation();
  const [posts, setposts] = useState([]);
  const seq = location.state.seq;
  const [usernumber, setusernumber] = useState(0);

  useEffect(() => {
    axios.get("/movieDetail/" + seq)
      .then(res => {
        setposts(res.data)

      }).catch(error => {
        console.log(error);
      });


    axios.post("/userState")
      .then(res => {
        setnickName(res.data[0].nickName);
        setusernumber(res.data[0].seq);
      })
      .catch(error => {
        console.log(error);
      })
      .then(res => {

      })



  }, []);


  const movieDelete = (e) => {

    const confirm = window.confirm("この作品を削除しますか？");
    if (confirm) {
      axios.get('/movieDelete/' + posts[0].seq + '/' + posts[0].poster)
        .then(res => {
        })
        .catch(error => {
          console.log(error);
        })
      alert("削除成功しました。");


    } else {
      alert("削除失敗しました。");

      e.preventDefault();
    }


  }

  const movieReservation = (e) => {
    const confirm = window.confirm("この作品を予約しますか？");

    if (confirm) {

    } else {
      e.preventDefault();
    }


  }

  const movieUpdate = (e) => {
    const confirm = window.confirm("この作品の情報を修正しますか？");

    if (confirm) {

    } else {
      e.preventDefault();
    }


  }


  return (
    <div style={{ marginTop: "8%" }}>

      <h3 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>作品情報</h3>
      <div style={{ color: "white", background: "#292929", width: "80%", height: "500px", margin: "0 auto", marginTop: "5%" }}>
        <div className="detailImg" style={{ width: "30%", float: "left" }}>
          {posts.map(post => <Image style={{ width: "70%", height: "80%", marginLeft: "40%", marginTop: "30%" }} src={"../img/" + `${post.poster}`} />)}
        </div>

        <div className="detail comment" style={{ width: "70%", float: "right" }}>
          {posts.map(post => <h2 style={{ textalin: "center", marginLeft: "30%", marginTop: "5%" }}>{post.title}</h2>)}
          {posts.map(post => <p style={{ textalin: "left", marginLeft: "30%", marginTop: "3%" }}>監督：{post.director}</p>)}
          {posts.map(post => <p style={{ textalin: "left", marginLeft: "30%", marginTop: "0.7%" }}>出演：{post.actor}</p>)}
          {posts.map(post => <p style={{ textalin: "left", marginLeft: "30%", marginTop: "0.7%" }}>リリース：{dayjs(`${post.release_date}`).format('YYYY-MM-DD')}</p>)}
          {posts.map(post => <p style={{ textalin: "left", marginLeft: "30%", marginRight: "5%", marginTop: "3%" }}> {post.content}</p>)}
        </div>

      </div>

      {nickName === "admin" ?
        <div style={{ width: "80%", height: "80px", margin: "0 auto", marginTop: "5%" }}>
          <Link to={"/movieUpdate"} style={{ textDecoration: "none", color: "white" }} state={{seq: seq}}><div style={{ float: "left", width: "50%", textAlign: "left" }} onClick={movieUpdate} ><Button variant="primary" style={{ width: "80%", height: "100%" }} type="submit">修正</Button></div></Link>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}><div style={{ float: "right", width: "50%", textAlign: "right" }} onClick={movieDelete} ><Button variant="danger" style={{ width: "80%" }} type="submit">削除</Button></div></Link>
        </div>

        :
        <div style={{ width: "80%", height: "80px", margin: "0 auto", marginTop: "5%" }}>
          <Link to={`/reservation/${seq}`} style={{ textDecoration: "none", color: "white" }} state={{ seq: seq, usernumber: usernumber }}>
            <div style={{ width: "100%", textAlign: "center" }} onClick={movieReservation} >
              <Button variant="danger" style={{ width: "60%", height: "80px" }} type="submit">今すぐ予約</Button></div>
          </Link>
        </div>

      }

    </div>

  );







}

export default MovieDetail;