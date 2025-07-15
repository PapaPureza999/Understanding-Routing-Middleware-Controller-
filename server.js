const express = require ('express');
const app = express();
// route ko call kiya
const userRoutes = require('./routes/users');
// middleware ko call kiya
const logger = require('./middleware/logger');

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/users',userRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));