const PORT = process.env.PORT || 9000;
const server = require('./server');
const db = require('./models');

server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}` );
    db.sequelize.sync();
});