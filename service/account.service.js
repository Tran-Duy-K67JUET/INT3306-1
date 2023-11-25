const account = require("../model/account.model");

module.exports = {
    createAccount: (data, callback) => {
        const Account = new account({
            name: data.name, 
            email: data.email,
            password: data.password,
            phone: data.phone,
            role: data.role,
            userName: data.user_name
        })
        Account.save()
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getAccount: (callback) => {
        account.find({})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    getAccountByUsername: (username, callback) => {
        account.find({userName: username})
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
    updateAccount: (data, callback) => {
        account.updateOne({
            name: data.name, 
            email: data.email,
            password: data.password,
            phone: data.phone,
            userName: data.user_name
        })
        .then((result) => {
            return callback(null, result);
        })
        .catch((error) => {
            return callback(error);
        })
    },
    deleteAccount: (data, callback) => {
        account.deleteOne({ name: data.name })
            .then((result) => {
                return callback(null, result);
            })
            .catch((error) => {
                return callback(error);
            })
    },
}