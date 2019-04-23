var express = require('express');
var router = express.Router();
var firebase = require('firebase');
// var functions = require('firebase-functions');

var db = firebase.firestore();
// var currentUser = firebase.auth().currentUser;

/* GET url*/
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

router.post('/getClothing', function(req, res) {
    req.docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            res.send(doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            res.send({error: true, message: 'Clothing does not exist!'});
        }
    }).catch(function(error) {
        console.error("Error retrieving document: ", error);
        res.send({error: true, message: 'Error retrieving clothing!'});
    });

});

// router.get('/uploadClothing', function(req, res) {
    
// });

router.post('/saveClothing', function(req, res) {
    var storageRef = firebase.storage().ref();
    var saveNewImg = true;
    var clothingItem = null;
    var imageRef = null;

    if (req.docRef !== null) {
        req.docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc);
                console.log("Document data:", doc.data());
                clothingItem = doc;
                if (req.imgUri === doc.imgUri)
                    saveNewImg = false;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    // storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
    //     console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        
    //     let db = firebase.firestore();
    //     let dbRef = db.collection("images").doc(file.name);
        
    //     let setData = dbRef.set({
    //         //yourdata here
    //         downloadURl: snapshot.downloadURL
    //     }).then( () => {
    //         console.log("Data stored in Firestore!");
    //     });

    imageRef = storageRef.child(req.session.uid).child(req.imgUri);
    var imageUri = '';

    if (saveNewImg) {
        imageRef.put(req.imgName).then(function(snapshot) {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log(snapshot);
            imageRef.getDownloadURL().then(function(url) {
                imageUri = url;
            })
            .catch(function(error) {
                console.log("Error getting download URL for image");
            });
        })
        .catch(function(error) {
            console.log("Error uploading image");
        });
    }

    if (req.docRef !== null) {
        docRef.update({
            name: req.name,
            category: req.category,
            colors: req.colors,
            tags: req.tags,
            imageUrl: imageUri,
            imageFilename: req.fileName,
            wearsBeforeWash: req.wearsTotal,
            wearsLeft: req.wearsTotal
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
            name: req.name,
            category: req.category,
            colors: req.colors,
            tags: req.tags,
            imageUrl: imageUri,
            dateCreated: new Date(),
            imageFilename: req.fileName,
            wearsBeforeWash: req.wearsTotal ? req.wearsTotal : -1,
            wearsLeft: req.wearsTotal ? req.wearsTotal : -1
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

router.post('/deleteClothing', function(req, res) {
    req.docRef.delete().then(function() {
        console.log("Document successfully deleted!");
        res.send({error: false});
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        res.send({error: true, message: 'Error deleting clothing!'});
    });
});

module.exports = router;
