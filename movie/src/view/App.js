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
import NearlyCinema from "./NearlyCinema";
import Reservation from "./Reservation";
import MovieUpdate from "./MovieUpdate";
import Search from "./Search";
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
      <Route exact path="/company" element={<Company/>}>Company</Route>
      <Route exact path="/nearlyCinema" element={<NearlyCinema/>}>nearlyCinema</Route>
      <Route exact path="/reservation/:seq" element={<Reservation/>}>reservation</Route>
      <Route exact path="/movieUpdate" element={<MovieUpdate/>}>MovieUpdate</Route>
      <Route exact path="/search" element={<Search/>}>Search</Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
