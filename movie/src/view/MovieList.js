
import axios from "axios";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";

class MovieList extends Component{
    state={
        posts:[]
    }
    constructor(props) {
        super(props);
        //console.log(this.props);
      } 
      componentDidMount(){
        const genre = this.props.genre;
        const search = this.props.search;
        if(this.props.state==="now"){
            axios.get("/NowList/"+genre)
            .then(res=>{
                this.setState({posts: res.data})
                
            }).catch(error=>{
                console.log(error);
            })
      }else if(this.props.state==="after"){
        axios.get("/AfterList/"+genre)
        .then(res=>{
            this.setState({posts: res.data})
            
        }).catch(error=>{
            console.log(error);
        })
      }
      else if(this.props.state==="search"){
        axios.get(`/search/${search}`)
        .then(res=>{
          this.setState({posts: res.data})
        })
        .catch(error=>{
        })
      }
    } 

  
    
    render(){
        const {posts}=this.state
        const detail=()=>{
        return(<MovieDetail/>)
        }
   
        

    return(
        <div>
          {posts.map(post=>
             
             <Card style={{ width: '19rem',float:"left",  marginLeft:"8%",marginTop:"5%"}}>
               <Card.Img variant="top" style={{height:"300px"}} src={`img/${post.poster}`} />
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





    )}




} 

export default MovieList;
