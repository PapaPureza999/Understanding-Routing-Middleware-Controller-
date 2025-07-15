// this is a middleware function that will work before the router functions

const logger = (req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

module.exports = logger;