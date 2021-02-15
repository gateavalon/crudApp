const mongoose = require('mongoose');

const DBconnection = mongoose.connect('mongodb+srv://gateavalon:bITfjd36clfFV1RP@clustergl.6x39r.mongodb.net/nodeSmaple?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log('DB connected'));

module.exports = DBconnection

