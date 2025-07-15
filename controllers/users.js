let users = [
    {id: 1, name: 'Pranjal'},
    {id: 2, name: 'Ace'}
];

// get all user data
const getAllUsers = (req,res) => {
    res.json(users);
}

// get one user by id
const getUserById = (req,res) => {
    // trying to find a user by their ID from the URL
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).send('User Not Found');
    }
    res.json(user);
}

// add a new user
const createUser = (req,res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
}

// update existing user
const updateUser = (req,res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) {
        return res.status(404).send('User Not Found');
    }

    user.name = req.body.name;
    res.json(user);
}

// delete a user
const deleteUser = (req,res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send('User Deleted');
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};