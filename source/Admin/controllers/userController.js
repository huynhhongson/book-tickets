//Xử lý thông tin user
const User = require('../../Admin/models/user');

//Lấy tất cả user
const getAllUser = (req, res) => {
    User.getAllUsers()
        .then(user => {
            res.render('user', {layout:"", user });
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình lấy dữ liệu khách hàng');
        });
};

//Thêm user
const addUser = (req, res) => {
    const user = req.body;
    User.addUser(user)
        .then(userId => {
            res.redirect('/user');
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình thêm khách hàng');
        });
}

//Xóa user
const deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId)
        .then(affectedRows => {
            res.redirect('/user');
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình xóa khách hàng');
        });
}

const getAllUserEdit = (req, res) => {
    const userId = req.params.id;
    User.getAllUserEdit(userId)
        .then(user => {
            res.render('editUser', {layout:"", user });
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình lấy dữ liệu khách hàng');
        });
};

//Cập nhật user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const user = req.body;
    User.updateUser(userId, user)
        .then(affectedRows => {
            res.redirect('/user');
        })
        .catch(error => {
            res.status(500).send('Lỗi trong quá trình cập nhật khách hàng');
        });
};

module.exports = {
    getAllUser,
    addUser,
    deleteUser,
    getAllUserEdit,
    updateUser

};