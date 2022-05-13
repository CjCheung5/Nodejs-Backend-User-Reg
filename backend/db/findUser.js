import client from './db.js';

//findUser by their first and last name
async function findUser(firstName, lastName) {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('main');

        const col = db.collection('user');
        
        let personDocument = {"firstName":firstName, "lastName":lastName};

        const p = await col.findOne(personDocument);

        return p;

    } catch(err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
};

export default findUser;