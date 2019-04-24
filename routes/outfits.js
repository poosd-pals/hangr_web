var express = require('express');
var router = express.Router();
var firebase = require('firebase');
// var functions = require('firebase-functions');

var db = firebase.firestore();
// var currentUser = firebase.auth().currentUser;

// Processes array of document reference ids
router.post('/wearOutfit', function(req, res) {
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
        res.send({error: true, message: 'Error wore outfit!'});
    else
        res.send({error: false, message: 'Successfully wore outfit!'});
});


// router.get('/uploadClothing', function(req, res) {
    
// });

router.post('/saveOutfit', function(req, res) {
    var storageRef = firebase.storage().ref();
    var saveNewImg = true;
    var clothingItem = null;
    var imageRef = null;
    var clothingItemIds =  [];

    req.clothingIds.map((clothingId) => {
        db.collection("outfits").doc(clothingId).get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                clothingItemIds.push(clothingId);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    });
    if (req.docRef !== null) {
        docRef.update({
            uid: req.session.uid,
            clothingItems: clothingItemIds,
            name: req.outfitName,
            favorite: req.favorite
        })
        .then(function(docRef) {
            console.log("Document modified with ID: ", docRef.id);
            console.log(docRef);
            res.send(docRef);
        })
        .catch(function(error) {
            console.error("Error saving document: ", error);
            res.send({error: true, message: 'Error adding clothing!'});
        });
    }
    else {
        db.collection(req.session.uid).add({
            uid: req.session.uid,
            clothingItems: clothingItemIds,
            name: req.outfitName,
            favorite: req.favorite
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            res.send(docRef);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            res.send({error: true, message: 'Error saving clothing!'});
        });
    }
});

router.post('/getCleanClothes', function(req, res) {
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
});



module.exports = router;