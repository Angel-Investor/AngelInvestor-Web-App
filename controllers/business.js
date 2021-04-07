let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Business = require('../models/business');

module.exports.displayBusinessList = (req, res, next) => {

    Business.find((err, businessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/list', 
            {title: 'Business List', 
            BusinessList: businessList,
            username: req.user ? req.user.username : ''});         
        }
    });

}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {title: 'Add Business', 
    username: req.user ? req.user.username : ''})    
}

module.exports.processAddPage = (req, res, next) => {
    let newBusiness = Business({
        "title": req.body.title,
        "author": req.body.author,
        "description": req.body.description,
    });

    Business.create(newBusiness, (err, Business) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('business/edit', {title: 'Edit Business', business: businessToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBusiness = Business({
        "_id": id,
        "title": req.body.title,
        "author": req.body.author,
        "description": req.body.description,
    });

    Business.updateOne({_id: id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             res.redirect('/business-list');
        }
    });
}