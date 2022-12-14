import React from "react";
import { useLocation } from "react-router-dom";
import MovieList from "./MovieList";

const Search = () =>{
    const location = useLocation();
    const search = location.search.substring(8);   
return(
    <div style={{marginTop:"8%", height:"1500px"}}>
    <h3 style={{textDecoration:"underline red",paddingLeft:"3%"}}>検索情報</h3>  
    <MovieList state="search" search={search}></MovieList>
    </div>
)

}
export default Search;