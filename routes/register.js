var express = require('express');
var router = express.Router();
var firebase = require('firebase');

router.get('/', (req, res) => {
	if(req.session.uid) {
		console.log("uid is not blank!");
	}
	else {
		var error = req.session.hasError;
		var errorMsg = req.session.errorMessage;

		req.session.destroy();
		res.render('register', { hasError: error, errorMessage: errorMsg });
	}
});

// account creation
router.post('/', (req, res) => {
	var email = req.body.email;
	var password = req.body.password;
	firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
		var errorCode = error.code;
		var errorMessage = error.message;

		req.session.destroy();
	});

	console.log("user created!");

	res.redirect('/index');
});

module.exports = router;