import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import MovieAfter from "./MovieAfter";
import MovieNow from "./MovieNow";
import MovieDetail from "./MovieDetail";
import Login from "./Login";
import SignUp from "./SignUp";
import Admin from "./Admin";
import Company from "./Company";
import MyPage from "./MyPage";
import Cinema from "./Cinema";
import Reservation from "./Reservation";
import MovieUpdate from "./MovieUpdate";
import Search from "./Search";
import FAQ from "./FAQ";
import CinemaMovies from "./CinemaMovies";
import CinemaSeat  from "./CinemaSeat";
import cinemaManager from "./CinemaManager";
import '../css/App.css'

function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home/>}>Home</Route>
      <Route exact path="/movieNow" element={<MovieNow/>}>movieNow</Route>
      <Route exact path="/movieDetail/:seq" element={<MovieDetail/>}>MovieDetail</Route>
      <Route exact path="/movieAfter" element={<MovieAfter/>}>movieAfter</Route>
      <Route exact path="/Login" element={<Login/>}>Login</Route>
      <Route exact path="/signUp" element={<SignUp/>}>SignUp</Route>
      <Route exact path="/myPage" element={<MyPage/>}>MyPage</Route>
      <Route exact path="/admin" element={<Admin/>}>Admin</Route>
      <Route exact path="/cinemaManager" element={<cinemaManager/>}>cinemaManager</Route>
      <Route exact path="/company" element={<Company/>}>Company</Route>
      <Route exact path="/Cinema" element={<Cinema/>}>Cinema</Route>
      <Route exact path="/reservation/:seq" element={<Reservation/>}>reservation</Route>
      <Route exact path="/movieUpdate" element={<MovieUpdate/>}>MovieUpdate</Route>
      <Route exact path="/search" element={<Search/>}>Search</Route>
      <Route exact path="/FAQ" element={<FAQ/>}>FAQ</Route>
      <Route exact path="/CinemaMovies" element={<CinemaMovies/>}>CinemaMovies</Route>
      <Route exact path="/CinemaSeat" element={<CinemaSeat/>}>CinemaSeat</Route>

     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
