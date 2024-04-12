const express = require('express');
const router = express.Router();
const serviceController = require('../../Admin/controllers/serviceController');

router.get('/', serviceController.getAllServices);
router.post('/', serviceController.addService);
router.get('/delete/:id', serviceController.deleteService);
reouter.get('/edit/:id', serviceController.getAllServicesEdit);
router.post('/edit', serviceController.updateService);

module.exports = router;