const client = require('./db');

async function insertUser() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('main');

        const col = db.collection('user');

        let personDocument = {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
            "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
            "contribs": [ "Turing machine", "Turing test", "Turingery" ],
            "views": 1250000
        };

        const p = await col.insertOne(personDocument);
        console.log("successfully inserted");

    } catch(err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

module.exports = insertUser;