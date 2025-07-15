const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users');

// get all user data
router.get('/', getAllUsers );

// get one user by id
router.get('/:id', getUserById);

// add a new user
router.post('/' , createUser);

// update existing user
router.put('/:id', updateUser);

// delete a user
router.delete('/:id', deleteUser);

module.exports = router;