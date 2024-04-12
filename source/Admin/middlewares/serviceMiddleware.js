const serviceController = require('../controllers/serviceController');

const getAllServices = (req, res, next) => {
    serviceController.getAllServices(req, res);
}

const addService = (req, res, next) => {
    serviceController.addService(req, res);
}

const deleteService = (req, res, next) => {
    serviceController.deleteService(req, res);
}

const getAllServicesEdit = (req, res, next) => {
    serviceController.getAllServicesEdit(req, res);
}

const updateService = (req, res, next) => {
    serviceController.updateService(req, res);
}

module.exports = {
    getAllServices,
    addService,
    deleteService,
    getAllServicesEdit,
    updateService
};