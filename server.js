const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const memoryStore = require('memorystore')(session);
const multer = require('multer');
const fs = require('fs'); 
const { error } = require('console');




//date比較
const today = new Date();
const yesterday = new Date(today.setDate(today.getDate() - 1));
//session時間
const maxAge = 1000 * 60 * 10;
//ファイル
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'movie/public/img/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)// 파일 원본이름 저장
    }
})

const upload = multer({ storage: storage }); //


//mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cc1029",
    database: "practice"

})

//session
app.use(session(
    {
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        store: new memoryStore({ checkPeriod: maxAge }),
        cookie: { maxAge: maxAge }

    }))



app.use(express.static(path.join(__dirname, 'movie/build')));
app.use(cors());
app.use(bodyParser.json());


app.get('/movieRank', (req, res) => {
    connection.query(
        'select count(a.movie_number) as count, b.title, b.director, b.actor,rank() over(order by count(a.movie_number) desc) as ranking from practice.reservation as a join practice.movie as b on a.movie_number = b.seq group by b.title limit 3'
        , (error, result) => {
            if (error) {
                console.log(error);
            } else {

                res.json(result);
            }

        }
    )
});


app.get('/NowList/:genre', (req, res) => {
    const genre = req.params.genre;
    if (genre === "all") {
        connection.query(
            'select seq,title,director,poster,actor from movie where release_date < ? order by release_date desc',
            [today],
            (error, result) => {
                if (error) {
                    console.log(error);
                }

                res.json(result);

            }
        )
    }
    else {
        connection.query(
            'select seq,title,director,poster,actor from movie where genre=? and release_date < ? order by release_date desc',
            [genre, today],
            (error, result) => {
                if (error) {
                    console.log(error);
                }

                res.json(result);

            }
        )
    }

});

app.get('/AfterList/:genre', (req, res) => {
    const genre = req.params.genre;
    if (genre === "all") {
        connection.query(
            'select seq,title,director,poster,actor from movie where release_date > ? order by release_date desc',
            [today],
            (error, result) => {
                if (error) {
                    console.log(error);
                }

                res.json(result);

            }
        )
    }
    else {
        connection.query(
            'select seq,title,director,poster,actor from movie where genre=?  and release_date > ? order by release_date desc',
            [genre, today],
            (error, result) => {
                if (error) {
                    console.log(error);
                }

                res.json(result);

            }
        )
    }

});

app.get("/movieDetail/:seq", (req, res) => {
    connection.query(
        'select * from movie where seq = ?',
        [req.params.seq],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            res.json(result);
        }


    )

});


app.post("/loginCheck", (req, res) => {
    connection.query(
        'select count(*) as count,seq,nickName,e_mail from account where e_mail=? and password=?',
        [req.body.e_mail, req.body.password],
        (error, result) => {

            if (result[0].count == 0) {
                res.json(result);
            }
            else {
                req.session.user = {
                    e_mail: result[0].e_mail,
                    nickName: result[0].nickName,
                    seq: result[0].seq,
                    authorized: true

                }
                res.json(result);
            }

        }


    )

})


app.get("/logOut", (req, res) => {
    if (req.session.user) {
        req.session.destroy();
    }


});



app.post("/userState", (req, res) => {

    if (req.session.user) {
        res.json([{
            state: 1,
            seq: req.session.user.seq,
            nickName: req.session.user.nickName
        }])
    } else {

        res.json([{ state: 0 }])

    }

})
app.post('/signUpCheck', (req, res) => {
    const email = req.body.email;
    connection.query(
        'select count(*) as count from account where e_mail = ?',
        [email],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            res.json(result);


        }
    )
})




app.post('/signUp', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const nickName = req.body.nickName;
    const number = req.body.number;
    connection.query(
        'insert into account(e_mail,password,name,nickName,phone) values(?,?,?,?,?)',
        [email, password, name, nickName, number],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            res.json({ account: 0 });
            console.log("登録成功");
        }
    )

});
//const fileFields = upload.fields([{name:'poster'},{name:'slide'}]);
app.post("/movieInsert",upload.array("poster"), (req, res) => {
   
    const title = req.body.title;
    const content = req.body.content;
    const director = req.body.director;
    const actor = req.body.actor;

    const poster = req.files[0].filename;
    const slide = req.files[1].filename;
    const release_date = req.body.release_date;
    const genre = req.body.genre;


    connection.query(
        'insert into movie(title,content,director,actor,poster,release_date,genre,slide) values(?,?,?,?,?,?,?,?)',
        [title, content, director, actor, poster, release_date, genre,slide],
        (error, result) => {
            if (error) {
                console.log(error);
            }

            console.log("Insert success");

        }
    )
});

app.post("/movieUpdate", upload.single('poster'), (req, res) => {
    const seq = req.body.seq;
    const title = req.body.title;
    const content = req.body.content;
    const director = req.body.director;
    const actor = req.body.actor;
    const release_date = req.body.release_date;
    const genre = req.body.genre;
    const hiddenPoster = req.body.hiddenPoster;

    try {
        const poster = req.file.filename;
        connection.query(
            'update movie set title = ?, director=?, actor=?,genre=?,content=?,release_date=?,poster=? where seq= ?',
            [title, director, actor, genre, content, release_date, poster, seq],
            (error, result) => {
                if (error) {
                    console.log(error);
                }
                console.log("update success");
            }
        )
        fs.unlink(__dirname + '/movie/public/img/' + hiddenPoster, (err) => {
            console.log(hiddenPoster);
        });

    } catch (error) {


        connection.query(
            'update movie set title = ?, director=?, actor=?,genre=?,content=?,release_date=? where seq= ?',
            [title, director, actor, genre, content, release_date, seq],
            (error, result) => {
                if (error) {
                    console.log(error);
                }
                console.log("update success");
            }
        )

    }

});




app.post("/movieDelete", (req, res) => {
    const seq = req.body.seq;
    const poster = req.body.poster;
    const slide = req.body.slide;

    connection.query(
        "delete from movie where seq=?",
        [seq],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            else {

                console.log("delete success");
            }
        }
    )
    fs.unlink(__dirname + '/movie/public/img/' + poster, (err) => {
        console.log(poster);
    });
    fs.unlink(__dirname + '/movie/public/img/' + slide, (err) => {
        console.log(slide);
    });

});

app.post("/accountList", (req, res) => {

    connection.query(
        'select * from account',
        (error, result) => {

            if (error) {
                console.log(error);
            } else {
                res.json(result);
            }


        }
    );


});

app.post("/userInfo", (req, res) => {

    connection.query(
        "select e_mail,name from account where seq= ?",
        [req.body.seq],
        (error, result) => {

            if (error) {
                console.log(error);
            }
            else {
                res.json(result);
            }

        }


    );

})


app.post("/reservation", (req, res) => {
    const user_number = req.body.user_number;
    const movie_number = req.body.movie_number;
    const reservation_date = req.body.reservation_date;
    const cinema = req.body.cinema;
    connection.query(
        'insert into reservation(user_number,movie_number,reservation_date,cinema) values(?,?,?,?)',
        [user_number, movie_number, reservation_date, cinema],
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log("reservation success");
            }
        }
    )
});

app.post("/myReservation", (req, res) => {
    const user_number = req.body.user_number;
    connection.query(
        'select distinct b.poster,b.title,a.reservation_date,a.cinema,a.movie_number,a.seq from practice.reservation as a join practice.movie as b on a.movie_number=b.seq && a.user_number=? && a.reservation_date > ? ; ',
        [user_number, yesterday],
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
  
                res.json(result);
            }
        }
    )

});

app.post("/withdrawal", (req, res) => {
    const seq = req.body.seq;
    connection.query(
        'delete from account where seq =?',
        [seq],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            console.log("account delete success");
        }
    )
});

app.get('/search/:search', (req, res) => {
    const param = req.params.search;
    const search = "%" + param + "%";
    connection.query(
        "select * from movie where actor Like ? || director Like ? || title Like ?",
        [search, search, search],
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                
                res.json(result);
            }
        }

    )
});

app.post("/recomend",(req,res)=>{
    const user_number=req.body.user_number;
    connection.query(
        'select * from movie where genre in (select distinct a.genre from movie as a join reservation as b on  a.seq=b.movie_number and b.user_number=? ) and not seq in (select a.seq from movie as a join reservation as b on a.seq=b.movie_number and b.user_number=? ) limit 3',
        [user_number,user_number],
        (error,result)=>{
            if(error){
                console.log(error);
            }else{
                res.json(result);
            }
        }

    )
})
app.get("/slide",(req,res)=>{
    connection.query(
        'select slide from movie where slide is not null and slide != "" order by release_date desc limit 3 ',
        (error,result)=>{
            if (error) {
                console.log(error);
            }else{
            
                res.json(result);
            }
        }
    )
})

app.post("/resurvationDelete",(req,res)=>{
    const seq =req.body.seq;
    connection.query(
        'delete from reservation where seq=?',
        [seq],
        (error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log("予約キャンセル");
            }
        }
    )
})

app.get("/faq/:question",(req,res)=>{
    const question =req.params.question;
    connection.query(
        'select answer,question from faq where question = ?',
        [question],
        (error,result)=>{
            if(error){
                console.log(error);
            }else{
              
                res.json(result);
                
            }
        }
    )


})

app.get("/faqList",(req,res)=>{
    const answer = "回答待ち";
    connection.query(
        'select question from faq where answer != ? order by seq desc limit 4',
        [answer],
        (error,result)=>{
            if (error) {
                console.log(error);
            }else{
                res.json(result);
            }
        }

    )

})

app.get("/myFaqList",(req,res)=>{
    const user_no=req.session.user.seq;
    connection.query(
        'select question from faq where user_no = ? order by seq desc limit 4',
        [user_no],
        (error,result)=>{
            if (error) {
                console.log(error);
            }else{
                res.json(result);
            }
        }

    )

})

app.get("/noAnswerList",(req,res)=>{
connection.query(
'select question,seq from faq where answer="回答待ち"',
(error,result)=>{
    if(error){
        console.log(error);
    }else{
        res.json(result);
    }
}


)


})

app.post("/answerUpdate",(req,res)=>{
    const seq =req.body.seq;
    const answer = req.body.answer;
    connection.query(
"update faq set answer = ? where seq =?",
[answer,seq],
(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log("answerInsert Success");
    }
}


    )

})

app.post("/questionInsert",(req,res)=>{
    const question = req.body.question;
    const answer = "回答待ち";
    const user_no = req.session.user.seq;
    connection.query(
'insert into faq(question,answer,user_no) values(?,?,?)',
[question,answer,user_no],
(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log("questionInsert Success");
    }
}

    )


})


app.listen(8080, function () {
    console.log('listenting on 8080')
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/movie/build/index.html'));
});

