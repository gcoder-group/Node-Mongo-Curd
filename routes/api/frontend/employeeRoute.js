var express = require('express');
var router = express.Router();

var employeeController = require('../../../controllers/api/frontend/employeeController');

/* GET records list  */
router.get('/',employeeController.index);

/* fetch the data for creating  record page */
router.get('/create',employeeController.create);

/* Create a new record */
router.post('/',employeeController.store);

/* Fetch the data for editing the record */
router.get('/:id/edit',employeeController.edit)

/* Update the record */
router.put('/:id',employeeController.update)

/* Delete the record */
router.delete('/:id',employeeController.destroy)
module.exports = router;
