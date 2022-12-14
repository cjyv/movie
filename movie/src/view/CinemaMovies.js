import React from "react";
import MovieList from "./MovieList";

const CinemaMovies = () => {




return(
    <div style={{marginTop:"8%",height:"auto"}}>
    <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>劇場に上映中の映画一覧</h3> 
    <div style={{marginBottom:"1200px"}}>
    <MovieList  genre="all" state="now"/>
    </div>
        </div>


)

}

export default CinemaMovies;