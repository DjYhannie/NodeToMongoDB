const express = require('express');
const router = express.Router();

const TODO = require('../controller/todoController');

//route to get all the list
router.get('/list',TODO.getList);
//route to create new list
router.post('/list',TODO.addList);
//route to get list by ID
router.get('/list/:id',TODO.getListById);
//route to update list using Id
router.put('/updatedList/:id',TODO.updateList);
//route to delete using Id
router.delete('/deleteList/:id',TODO.deleteList);
module.exports = router;