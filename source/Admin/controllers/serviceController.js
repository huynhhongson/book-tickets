//Xử lý liên quan đến các dịch vụ như combo bắp nước 
const Service = require('../../Admin/models/service');

const getAllServices = (req, res) => {
    Service.getAllServices(req, res);
}

const addService = (req, res) => {
    Service.addService(req, res);
}

const deleteService = (req, res) => {
    Service.deleteService(req, res);
}

const getAllServicesEdit = (req, res) => {
    Service.getAllServicesEdit(req, res);
}

const updateService = (req, res) => {
    Service.updateService(req, res);
}

module.exports = {
    getAllServices,
    addService,
    deleteService,
    getAllServicesEdit,
    updateService
};