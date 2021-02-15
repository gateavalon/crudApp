var Userdb = require('../model/model');

exports.create = (req, res) => {
    if (!req.body) {
        console.log('Empty input')
        res.status(400).send({ message: 'Empty content' });
        return;
    };

    //new user
    const user = Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //save user in the database
    user
        .save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send({ message: err })
        })
}


exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.send({ message: err })
        })






}

exports.update = (req, res) => {



}

exports.delete = (req, res) => {



}

