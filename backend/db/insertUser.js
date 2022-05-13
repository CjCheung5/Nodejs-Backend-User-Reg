import client from './db.js';

async function insertUser(firstName, lastName) {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('main');

        const col = db.collection('user');

        let personDocument = {
            firstName: firstName,
            lastName: lastName
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

export default insertUser;