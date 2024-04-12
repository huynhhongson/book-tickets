const db = require('../../Admin/middlewares/db');

//Lấy tất cả dịch vụ từ db
const getAllServices = (req, res) => {
    db.query('SELECT * FROM dichvu', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.render('actor', {layout:"", service: result });
    });
}

//Thêm mới dịch vụ
const addService = (req, res) => {
    const { name, price, information } = req.body;
    db.query('INSERT INTO services SET ?', { name: name, price: price, information: information }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/services');
    });
}
//Xóa dịch vụ
const deleteService = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM services WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/services');
    });
}

const getAllServiceEdit = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM services WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.render('edit_service', {layout:"", service: result[0] });
    });
}
//Cập nhật dịch vụ
const updateService = (req, res) => {
    const id = req.params.id;
    const { name, price, information } = req.body;
    db.query('UPDATE services SET name = ?, price = ?, information = ? WHERE id = ?', [name, price, information, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/services');
    });
}

module.exports = {
    getAllServices,
    addService,
    deleteService,
    getAllServiceEdit,
    updateService
};