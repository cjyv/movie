import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


const Header = () => {


  const [posts, setposts] = useState(0);
  const [nickName, setnickName] = useState("");
  const [seq, setseq] = useState(0);


  useEffect(() => {
    axios.post("/userState")
      .then(res => {

        setposts(res.data[0].state)
        setnickName(res.data[0].nickName);
        setseq(res.data[0].seq);
      })
      .catch(error => {
        console.log(error);
      })
      .then(res => {

      })

  }, [posts]);


  const logOut = (e) => {

    const logOutCheck = window.confirm("ログアウトしますか？");
    if (logOutCheck) {
      axios.get('/logOut')
        .then()
        .catch(error => {
          console.log(error);
        })
    }
    else {
   

      e.defaultprevente();
    }
  }
const faq=()=>{
 document.location.href=`/FAQ?state=${posts}`
 
}

  return (
    <div>
      <Navbar bg="light" fixed="top" expand="lg" style={{ opacity: "0.95" }} >
        <Container fluid  >
          <Navbar.Brand href="/"><img src="https://ogre.natalie.mu/media/news/eiga/2017/0831/tohocinemas_20170831_01.jpg?imwidth=750&imdensity=1"
            style={{ height: "50px" }}
          ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/movieNow">上映中作品情報</Nav.Link>
              <Nav.Link href="/movieAfter">公開予定作品情報</Nav.Link>
              <NavDropdown title="劇場探し" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/nearlyCinema">近所の劇場</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  IMAX劇場
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={faq}  >
                  ご質問・ご意見
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/company" >
                企業情報
              </Nav.Link>



              {
                posts != 0 ?
                  <Nav.Link disabled>{nickName}様</Nav.Link>
                  :
                  null

              }


              {posts == 0 ?
                <Nav.Link href="/Login" >ログイン</Nav.Link>
                :
                <Nav.Link href="/" onClick={logOut} >

                  ログアウト
                </Nav.Link>

              }


              {
                nickName === "admin" ?
                  <Nav.Link href="/admin" >管理者ページ</Nav.Link>

                  : (posts == 0
                    ?
                    null
                    :
                    <Nav.Link href="/myPage">マイページ</Nav.Link>
                  )


              }

            </Nav>
            <Form className="d-flex" action="/search">
              <Form.Control
                type="search"
                placeholder="作品及び関係者"
                className="me-2"
                aria-label="Search"
                name="search"
                id="search"
              />
              <Button variant="outline-danger" style={{ width: "70px" }} type="submit">検索</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )


}

export default Header;