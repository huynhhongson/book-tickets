const db = require('../middlewares/db');

// Lấy danh sách phim từ cơ sở dữ liệu
const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM phim';
        db.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// Thêm phim vào cơ sở dữ liệu
const addMovie = (movie) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO phim (Maphim, TenPhim, TomTat) VALUES (?, ?, ?)';
        const values = [movie.id, movie.name, movie.information];
        console.log(query);
        console.log(values);
        db.query(query, values, (error, result) => {
            console.log(result);
            if (error) {
                reject(error);
            } else {
                resolve(result.insertId);
            }
        });
    });
};


// Xóa phim khỏi cơ sở dữ liệu
const deleteMovie = (movieId) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM phim WHERE MaPhim = ${movieId}`;
        console.log(query);
        db.query(query, (error, result) => {
            console.log(result);
            if (error) {
                reject(error);
            } else {
                resolve(result.affectedRows);
            }
        });
    });
};

const getAllMoviesEdit = (movieId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM phim WHERE MaPhim = ${movieId}`;
        db.query(query, (error, results) => {
            console.log(results);
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

//Cập nhật 1 phim
const updateMovie = (movieId, movie) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE phim SET TenPhim = '${movie.name}', TomTat = '${movie.information}' WHERE MaPhim = ${movieId}`;
        console.log(query);
        db.query(query, (error, result) => {
            console.log(result);
            if (error) {
                reject(error);
            } else {
                resolve(result.affectedRows);
            }
        });
    });
};

module.exports = {
    getAllMovies,
    addMovie,
    deleteMovie,
    getAllMoviesEdit,
    updateMovie
};