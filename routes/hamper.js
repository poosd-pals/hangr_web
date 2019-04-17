var express = require('express');
var router = express.Router();
var firebase = require('firebase');
// var functions = require('firebase-functions');

var gs = require('../google-services.json');
var config = gs.config;
firebase.initializeApp(config);

var db = firebase.firestore();
// var currentUser = firebase.auth().currentUser;

// Processes array of document reference ids
router.get('/getHamper', function(req, res) {
    db.collection(req.session.uid).where('wearsLeft', '==', 0).get()
    .then(function(querySnapshot) {
        res.send(querySnapshot.docs);
        // querySnapshot.forEach(function(doc) {
        //     // doc.data() is never undefined for query doc snapshots
            
        // });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.send({error: true, message: 'Error getting hamper!'});
    });
});

// Processes array of document reference ids (can be as many or as little ids as desired)
router.get('/emptyHamper', function(req, res) {
    var error = false;

    req.clothingItems.map((clothingRefId) => {
        var clothingRef = db.collection(req.session.uid).doc(clothingRefId);

        clothingRef.update({
            wearsLeft: doc.data().wearsTotal
        }).then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            error = true;
        });
    });

    if(error)
        res.send({error: true, message: 'Error assembling outfit!'});
    else
        res.send({error: false, message: 'Successfully assembled outfit!'});
});

module.exports = router;