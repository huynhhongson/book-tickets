const Movie = require('../../Admin/models/movie');

// Hiển thị danh sách phim
const getAllMovies = (req, res) => {
    Movie.getAllMovies()
        .then(movie => {
            res.render('movie', { layout:"",movie });
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình lấy dữ liệu phim');
        });
};

const addMovie = (req, res) => {
    const movie = req.body;
    console.log(movie);
    Movie.addMovie(movie)
        .then(insertId => {
            res.redirect('/movie');
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình thêm phim');
        });
};


// Xóa phim
const deleteMovie = (req, res) => {
    const movieId = req.params.id;
    Movie.deleteMovie(movieId)
        .then(affectedRows => {
            res.redirect('/movie');
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình xóa phim');
        });
};

const getAllMoviesEdit = (req, res) => {
    const movieId = req.params.id;
    Movie.getAllMoviesEdit(movieId)
        .then(movie => {
            res.render('edit', { movie });
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình lấy dữ liệu phim');
        });
};

//cập nhật 1 bộ phim
const updateMovie = (req, res) => {
    const movieId = req.params.id;
    const movie = req.body;
    Movie.updateMovie(movieId, movie)
        .then(affectedRows => {
            res.redirect('/movie');
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình cập nhật phim');
        });
};


module.exports = {
    getAllMovies,
    addMovie,
    deleteMovie,
    getAllMoviesEdit,
    updateMovie
};