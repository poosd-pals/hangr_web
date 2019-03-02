var express = require('express');
var router = express.Router();
var firebase = require('firebase');

// pull connection configuration from google-services.json file
var gs = require('../google-services.json');
var config = gs.config;
firebase.initializeApp(config);

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.uid) {
		console.log("uid is not blank!");
	}
	else {
		var error = req.session.hasError;
		var errorMsg = req.session.errorMessage;
		var regSuccess = req.session.hasRegisterSuccess;

		req.session.destroy();

		res.render('index', { hasError: error, errorMessage: errorMsg, hasRegisterSuccess: regSuccess });
	}
});

router.post('/', (req, res) => {
	var email = req.body.email;
	var password = req.body.password;

	firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;
		var regSuccess = req.session.hasRegisterSuccess;

		req.session.destroy();
	});

	res.redirect('/');
});

module.exports = router;
