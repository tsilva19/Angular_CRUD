const express = require('express');
const app = express();
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../modelos/Business');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/edit/:id').post(function (req, res) {
  
    Business.findById(req.params.id, function(err,  business) {
      
        
        business.nome = req.body.nome;
        business.cpf = req.body.cpf;
        business.email = req.body.email;
        business.telefone = req.body.telefone;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
      
    
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;