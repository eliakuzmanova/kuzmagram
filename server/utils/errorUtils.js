const mongoose = require('mongoose');

function getFirstMonooseError(err) {
    const errors = Object.keys(err.errors).map(key => err.errors[key].message);
    return errors[0];
}

exports.getErrorMessage = (err) => {
    switch (err.name) {
        case "Error":
            return err.message;
        case "ValidationError":
            return getFirstMonooseError(err);
        default:
            return err.message;
    }
 }

 
exports.errorResponse = (res, template, error,status = 404) => {
    const err = this.getErrorMessage(error);
    return res.status(status).render(template, {err})
}