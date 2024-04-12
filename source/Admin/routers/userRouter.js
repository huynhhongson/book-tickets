const express = require('express');
const router = express.Router();
const userMiddleware = require('../../Admin/middlewares/userMiddleware');

app.get('/', userMiddleware.getAllUsers);
app.post('/add', userMiddleware.addUser);
app.get('/delete/:id', userMiddleware.deleteUser);
app.get('/edit/:id', userMiddleware.getAllUserEdit);
app.post('/edit', userMiddleware.updateUser);

module.exports = router;