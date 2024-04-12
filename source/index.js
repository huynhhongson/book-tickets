require('dotenv').config();
const https = require('https');
const express = require('express');
const sessions = require('express-session');
const { engine } = require('express-handlebars');
const bodyParser = require('./middlewares/body_parser');
const flashMessage = require('./middlewares/flash_message');
const rateLimit = require('express-rate-limit');
const path = require("path")
const host = process.env.HOST;
const port = process.env.PORT;

const route = require('./routes')
const movieMiddleware = require('./Admin/middlewares/movieMiddleware');
const userMiddleware = require('./Admin/middlewares/userMiddleware');  
const router = require('./Admin/routers/movieRouter');

const app = express();

//use handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static(path.join(__dirname, '/public')));

//limit rate
const apiLimiter = rateLimit({
    windowMs: 10 * 1000, // 10s
    max: 30,
    message: 'Too many connection',
});

app.use(sessions({
    secret: "my_secret_key",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

// Use middlewares 
app.use(bodyParser.urlencoded);
app.use(flashMessage);

//Admin
app.get('/Admin', (req, res) => {
    if(req.session.admin)
        res.render('home',{layout:""});
    else 
        res.redirect('/account/login')
});
app.get('/Movie', movieMiddleware.getAllMovies);
app.post('/Movie/add', movieMiddleware.addMovie);
app.get('/Movie/delete/:id', movieMiddleware.deleteMovie);
app.get('/Movie/edit/:id', movieMiddleware.getAllMoviesEdit);
app.post('/Movie/edit', movieMiddleware.updateMovie);
//Đường dẫn đến trang edit.ejs để cập nhật phim
app.get('/Genre', (req, res) => {
    //https://api.themoviedb.org/3/genre/movie/list?language=vi-VI&api_key=582118d727a442d47c146c982576a944    
    const options = {
        hostname: 'api.themoviedb.org',
        path: '/3/genre/movie/list?language=vi-VI&api_key=582118d727a442d47c146c982576a944',
        port: 443,
        method: 'GET'
    }
    const request = https.request(options, response => {
        let data = '';
        response.on('data', chunk => {
            data += chunk;
        })
        response.on('end', () => {
            const genre = JSON.parse(data);
            res.render('genre', {layout:"", genre: genre.genres });
        })

        response.on('error', e => console.error(e))
    });

    request.on('error', error => {
        console.error(error)
    })
    request.end();
});

app.get('/User', userMiddleware.getAllUsers);
app.post('/User/add', userMiddleware.addUser);
app.get('/User/delete/:id', userMiddleware.deleteUser);
app.get('/User/edit/:id', userMiddleware.getAllUserEdit);
app.post('/User/edit', userMiddleware.updateUser);

//User
app.use('/', route)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    res.render('error',{layout:""});
  });
  
app.listen(port, host, () => {
    console.log(`Server is running at ${host}:${port}`);
});


