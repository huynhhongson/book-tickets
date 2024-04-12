//Xử lý user với db
const db = require('../middlewares/db');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM khachhang';
        db.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO khachhang (TenKH, DiaChi, SDT, Email, MatKhau) VALUES (?, ?, ?, ?, ?)';
        db.query(query, user, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.insertId);
            }
        });
    });
};

const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM khachhang WHERE MaKhachHang = ${userId}`;
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

const getAllUserEdit = (userId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM khachhang WHERE MaKhachHang = ?';
        db.query(query, userId, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const updateUser = (userId, user) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE khachhang SET ? WHERE id = ?';
        db.query(query, [user, userId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.affectedRows);
            }
        });
    });
};

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    getAllUserEdit,
    updateUser

};