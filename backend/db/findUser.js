const client = require('./db');

//findUser by their first and last name
async function findUser(firstName, lastName) {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('main');

        const col = db.collection('user');
        
        let personDocument = {"name": {"firstName":firstName, "lastName":lastName}};

        const p = await col.findOne(personDocument);
        console.log(p);

    } catch(err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
};

module.exports = findUser;