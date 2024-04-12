const movieController = require('../../Admin/controllers/movieController');
const getAllMovies = (req, res, next) => {
    movieController.getAllMovies(req, res);
};

const addMovie = (req, res, next) => {
    movieController.addMovie(req, res);
};

const deleteMovie = (req, res, next) => {
    movieController.deleteMovie(req, res);
};

const getAllMoviesEdit = (req, res, next) => {
    movieController.getAllMoviesEdit(req, res);
};

const updateMovie = (req, res, next) => {
    req.render('edit', { movie: req.body });
    movieController.updateMovie(req, res);
};

module.exports = {
    getAllMovies,
    addMovie,
    deleteMovie,
    getAllMoviesEdit,
    updateMovie
};