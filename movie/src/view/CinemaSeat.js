import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Button } from "react-bootstrap";
import axios from "axios";




const CinemaSeat=()=>{
　　const location = useLocation();
    const cinema = location.state.cinema;
    const cinema_room= location.state.cinema_room;
    const name =location.state.name;
    const movie_number = location.state.movie_number;
    const reservation_date=location.state.reservation_date;
    const user_number=location.state.user_number;
    const e_mail = location.state.e_mail;
　
    const seats=[];
  
    useEffect(()=>{
        axios.get('/')
        
        },[])

    const checked =(idname)=>{
        const id = document.getElementById(idname);
        const seat = id.innerHTML;
        if (id.className=="r_table") {
            id.className="checked";
           seats.push(seat);
        
          
        }else if(id.className=="checked"){
            id.className="r_table";
         
        
            for(let i = 0; i < seats.length; i++) {
                if(seats[i] === seat)  {
                    seats.splice(i, 1);
                  i--;
                }
              }
            }
            console.log(seats);
            
    }
    return(

        <div style={{ width: "100%", height: "auto", margin: "7% auto" }}>
        <h3 style={{ textDecoration: "underline red", paddingLeft: "3%" }}>予約ページ</h3>
        <div style={{marginTop:"2%"}}>
        <div id="reservationInfo" >
         <table>
            
         </table>
        </div>
        <div style={{textAlign:"center",marginTop:"2%"}}>
                    <div style={{width:"80%",height:"30px", margin:"0 auto", border:"1px solid black"}}>
                                             screen
                                            </div>
                                            <table border={1}  style={{marginLeft:"auto",marginRight:"auto",width:"60rem",marginTop:"5%"}}>
                                          
                                            <tr>
                                            <td id="A1"  className="r_table" onClick={()=>{checked("A1")}}>A1</td>
                                            <td id="A2" className="r_table" onClick={()=>{checked("A2")}}> A2</td>
                                            <td id="A3"  className="r_table" onClick={()=>{checked("A3")}}>A3</td>
                                            <td id="A4" className="r_table" onClick={()=>{checked("A4")}}>A4</td>
                                            <td id="A5" className="r_table" onClick={()=>{checked("A5")}}>A5</td>
                                            <td id="A6" className="r_table" onClick={()=>{checked("A6")}}>A6</td>
                                            <td id="A7" className="r_table" onClick={()=>{checked("A7")}}>A7</td>
                                            <td id="A8" className="r_table" onClick={()=>{checked("A8")}}>A8</td>
                                            <td id="A9" className="r_table" onClick={()=>{checked("A9")}}>A9</td>
                                            <td id="A10" className="r_table" onClick={()=>{checked("A10")}}>A10</td>
                                            <td id="A11"  className="r_table" onClick={()=>{checked("A11")}}>A11</td>
                                            <td id="A12" className="r_table" onClick={()=>{checked("A12")}}>A12</td>
                                            <td id="A13"  className="r_table" onClick={()=>{checked("A13")}}>A13</td>
                                            <td id="A14" className="r_table" onClick={()=>{checked("A14")}}>A14</td>
                                            <td id="A15" className="r_table" onClick={()=>{checked("A15")}}>A15</td>
                                            <td id="A16" className="r_table" onClick={()=>{checked("A16")}}>A16</td>
                                            <td id="A17" className="r_table" onClick={()=>{checked("A17")}}>A17</td>
                                            <td id="A18" className="r_table" onClick={()=>{checked("A18")}}>A18</td>
                                            <td id="A19" className="r_table" onClick={()=>{checked("A19")}}>A19</td>
                                            <td id="A20" className="r_table" onClick={()=>{checked("A20")}}>A20</td>
                                            </tr>
                                            <tr >
                                            <td id="B1" className="r_table" onClick={()=>{checked("B1")}}>B1</td>
                                            <td id="B2" className="r_table" onClick={()=>{checked("B2")}}>B2</td>
                                            <td id="B3" className="r_table" onClick={()=>{checked("B3")}}>B3</td>
                                            <td id="B4" className="r_table" onClick={()=>{checked("B4")}}>B4</td>
                                            <td id="B5" className="r_table" onClick={()=>{checked("B5")}}>B5</td>
                                            <td id="B6" className="r_table" onClick={()=>{checked("B6")}}>B6</td>
                                            <td id="B7" className="r_table"onClick={()=>{checked("B7")}}>B7</td>
                                            <td id="B8" className="r_table"onClick={()=>{checked("B8")}}>B8</td>
                                            <td id="B9" className="r_table"onClick={()=>{checked("B9")}}>B9</td>
                                            <td id="B10" className="r_table"onClick={()=>{checked("B10")}}>B10</td>
                                            <td id="B11" className="r_table"onClick={()=>{checked("B11")}}>B11</td>
                                            <td id="B12" className="r_table"onClick={()=>{checked("B12")}}>B12</td>
                                            <td id="B13" className="r_table"onClick={()=>{checked("B13")}}>B13</td>
                                            <td id="B14" className="r_table"onClick={()=>{checked("B14")}}>B14</td>
                                            <td id="B15" className="r_table"onClick={()=>{checked("B15")}}>B15</td>
                                            <td id="B16" className="r_table"onClick={()=>{checked("B16")}}>B16</td>
                                            <td id="B17" className="r_table"onClick={()=>{checked("B17")}}>B17</td>
                                            <td id="B18" className="r_table"onClick={()=>{checked("B18")}}>B18</td>
                                            <td id="B19" className="r_table"onClick={()=>{checked("B19")}}>B19</td>
                                            <td id="B20" className="r_table"onClick={()=>{checked("B20")}}>B20</td>
                                            </tr>
                                            <tr>
                                            <td id="C1" className="r_table"onClick={()=>{checked("C1")}}>C1</td>
                                            <td id="C2" className="r_table"onClick={()=>{checked("C2")}}>C2</td>
                                            <td id="C3" className="r_table"onClick={()=>{checked("C3")}}>C3</td>
                                            <td id="C4" className="r_table"onClick={()=>{checked("C4")}}>C4</td>
                                            <td id="C5" className="r_table"onClick={()=>{checked("C5")}}>C5</td>
                                            <td id="C6" className="r_table"onClick={()=>{checked("C6")}}>C6</td>
                                            <td id="C7" className="r_table"onClick={()=>{checked("C7")}}>C7</td>
                                            <td id="C8" className="r_table"onClick={()=>{checked("C8")}}>C8</td>
                                            <td id="C9" className="r_table"onClick={()=>{checked("C9")}}>C9</td>
                                            <td id="C10" className="r_table"onClick={()=>{checked("C10")}}>C10</td>
                                            <td id="C11" className="r_table"onClick={()=>{checked("C11")}}>C11</td>
                                            <td id="C12" className="r_table"onClick={()=>{checked("C12")}}>C12</td>
                                            <td id="C13" className="r_table"onClick={()=>{checked("C13")}}>C13</td>
                                            <td id="C14" className="r_table"onClick={()=>{checked("C14")}}>C14</td>
                                            <td id="C15" className="r_table"onClick={()=>{checked("C15")}}>C15</td>
                                            <td id="C16" className="r_table"onClick={()=>{checked("C16")}}>C16</td>
                                            <td id="C17" className="r_table"onClick={()=>{checked("C17")}}>C17</td>
                                            <td id="C18" className="r_table"onClick={()=>{checked("C18")}}>C18</td>
                                            <td id="C19" className="r_table"onClick={()=>{checked("C19")}}>C19</td>
                                            <td id="C20" className="r_table"onClick={()=>{checked("C20")}}>C20</td>
                                            </tr>
                                            <tr>
                                            <td id="D1" className="r_table"onClick={()=>{checked("D1")}}>D1</td>
                                            <td id="D2" className="r_table"onClick={()=>{checked("D2")}}>D2</td>
                                            <td id="D3" className="r_table"onClick={()=>{checked("D3")}}>D3</td>
                                            <td id="D4" className="r_table"onClick={()=>{checked("D4")}}>D4</td>
                                            <td id="D5" className="r_table"onClick={()=>{checked("D5")}}>D5</td>
                                            <td id="D6" className="r_table"onClick={()=>{checked("D6")}}>D6</td>
                                            <td id="D7" className="r_table"onClick={()=>{checked("D7")}}>D7</td>
                                            <td id="D8" className="r_table"onClick={()=>{checked("D8")}}>D8</td>
                                            <td id="D9" className="r_table"onClick={()=>{checked("D9")}}>D9</td>
                                            <td id="D10" className="r_table"onClick={()=>{checked("D10")}}>D10</td>
                                            <td id="D11" className="r_table"onClick={()=>{checked("D11")}}>D11</td>
                                            <td id="D12" className="r_table"onClick={()=>{checked("D12")}}>D12</td>
                                            <td id="D13" className="r_table"onClick={()=>{checked("D13")}}>D13</td>
                                            <td id="D14" className="r_table"onClick={()=>{checked("D14")}}>D14</td>
                                            <td id="D15" className="r_table"onClick={()=>{checked("D15")}}>D15</td>
                                            <td id="D16" className="r_table"onClick={()=>{checked("D16")}}>D16</td>
                                            <td id="D17" className="r_table"onClick={()=>{checked("D17")}}>D17</td>
                                            <td id="D18" className="r_table"onClick={()=>{checked("D18")}}>D18</td>
                                            <td id="D19" className="r_table"onClick={()=>{checked("D19")}}>D19</td>
                                            <td id="D20" className="r_table"onClick={()=>{checked("D20")}}>D20</td>
                                            </tr>
                                       
                                            <tr>
                                            <td id="E1"  className="r_table" onClick={()=>{checked("E1")}}>E1</td>
                                            <td id="E2" className="r_table"onClick={()=>{checked("E2")}}>E2</td>
                                            <td id="E3"  className="r_table"onClick={()=>{checked("E3")}}>E3</td>
                                            <td id="E4" className="r_table"onClick={()=>{checked("E4")}}>E4</td>
                                            <td id="E5" className="r_table"onClick={()=>{checked("E5")}}>E5</td>
                                            <td id="E6" className="r_table"onClick={()=>{checked("E6")}}>E6</td>
                                            <td id="E7" className="r_table"onClick={()=>{checked("E7")}}>E7</td>
                                            <td id="E8" className="r_table"onClick={()=>{checked("E8")}}>E8</td>
                                            <td id="E9" className="r_table"onClick={()=>{checked("E9")}}>E9</td>
                                            <td id="E10" className="r_table"onClick={()=>{checked("E10")}}>E10</td>
                                            <td id="E11"  className="r_table"onClick={()=>{checked("E11")}}>E11</td>
                                            <td id="E12" className="r_table"onClick={()=>{checked("E12")}}>E12</td>
                                            <td id="E13"  className="r_table"onClick={()=>{checked("E13")}}>E13</td>
                                            <td id="E14" className="r_table"onClick={()=>{checked("E14")}}>E14</td>
                                            <td id="E15" className="r_table"onClick={()=>{checked("E15")}}>E15</td>
                                            <td id="E16" className="r_table"onClick={()=>{checked("E16")}}>E16</td>
                                            <td id="E17" className="r_table"onClick={()=>{checked("E17")}}>E17</td>
                                            <td id="E18" className="r_table"onClick={()=>{checked("E18")}}>E18</td>
                                            <td id="E19" className="r_table"onClick={()=>{checked("E19")}}>E19</td>
                                            <td id="E20" className="r_table"onClick={()=>{checked("E20")}}>E20</td>
                                            </tr>
                                            <tr >
                                            <td id="F1" className="r_table"onClick={()=>{checked("F1")}}>F1</td>
                                            <td id="F2" className="r_table"onClick={()=>{checked("F2")}}>F2</td>
                                            <td id="F3" className="r_table"onClick={()=>{checked("F3")}}>F3</td>
                                            <td id="F4" className="r_table"onClick={()=>{checked("F4")}}>F4</td>
                                            <td id="F5" className="r_table"onClick={()=>{checked("F5")}}>F5</td>
                                            <td id="F6" className="r_table"onClick={()=>{checked("F6")}}>F6</td>
                                            <td id="F7" className="r_table"onClick={()=>{checked("F7")}}>F7</td>
                                            <td id="F8" className="r_table"onClick={()=>{checked("F8")}}>F8</td>
                                            <td id="F9" className="r_table"onClick={()=>{checked("F9")}}>F9</td>
                                            <td id="F10" className="r_table"onClick={()=>{checked("F10")}}>F10</td>
                                            <td id="F11" className="r_table"onClick={()=>{checked("F11")}}>F11</td>
                                            <td id="F12" className="r_table"onClick={()=>{checked("F12")}}>F12</td>
                                            <td id="F13" className="r_table"onClick={()=>{checked("F13")}}>F13</td>
                                            <td id="F14" className="r_table"onClick={()=>{checked("F14")}}>F14</td>
                                            <td id="F15" className="r_table"onClick={()=>{checked("F15")}}>F15</td>
                                            <td id="F16" className="r_table"onClick={()=>{checked("F16")}}>F16</td>
                                            <td id="F17" className="r_table"onClick={()=>{checked("F17")}}>F17</td>
                                            <td id="F18" className="r_table"onClick={()=>{checked("F18")}}>F18</td>
                                            <td id="F19" className="r_table"onClick={()=>{checked("F19")}}>F19</td>
                                            <td id="F20" className="r_table"onClick={()=>{checked("F20")}}>F20</td>
                                            </tr>
                                    
                       
                                            </table>
                                            </div>
                                            <div style={{ width: "100%", textAlign: "center", marginTop:"3%" }}  >
              <Button variant="danger" style={{ width: "40%", height: "80px" }} type="button">予約</Button></div>


        </div>


        </div>
    )
}
export default CinemaSeat;