const controller = require('../controllers/controller');
const { Router } = require('express');
const route = Router();

route.get('/', controller.home)
route.get('/api', controller.api)
route.get('/api/:id', controller.porId);
route.post('/add', controller.add)


module.exports = route