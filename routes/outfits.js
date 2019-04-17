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
router.get('/assembleOutfit', function(req, res) {
    var error = false;
    req.clothingItems.map((clothingRefId) => {
        var clothingRef = db.collection(req.session.uid).doc(clothingRefId);

        clothingRef.update({
            wearsLeft: (doc.data().wearsLeft === -1 ? -1 : doc.data().wearsLeft - 1)
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

router.get('/getCleanClothes', function(req, res) {
    db.collection(req.session.uid).where('wearsLeft', '!=', 0).get()
    .then(function(querySnapshot) {
        res.json('clothingItems', querySnapshot.docs);
        res.send(querySnapshot.docs);
        // querySnapshot.forEach(function(doc) {
        //     // doc.data() is never undefined for query doc snapshots
            
        // });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
        res.send({error: true, message: 'Error getting clean clothes!'});
    });
})

module.exports = router;