import React from "react";
import { useLocation } from "react-router";
import MovieList from "./MovieList";

const CinemaMovies = () => {

const location = useLocation();
const cinema=location.state.Cinema;

return(
    <div style={{marginTop:"8%",height:"auto"}}>
    <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>劇場に上映中の映画一覧</h3> 
    <div style={{marginBottom:"1200px"}}>
    <MovieList  state="cinema" cinema={cinema}/>
    </div>
        </div>


)

}

export default CinemaMovies;