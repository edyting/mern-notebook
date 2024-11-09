
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode:500;
    res.status(statusCode);
  
    if (err.name === 'CastError') {
        res.json({ message: "Invalid ID format. Please check the ID and try again." });
    } else {
        res.json({ message: err.message });
    }
};

module.exports = { errorHandler }; 