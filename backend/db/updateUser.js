const client = require('./db');

async function updateUser(firstName, lastName, newFirstName, newLastName) {
  try {
    await client.connect();

    const db = client.db("main");
    const col = db.collection("user");

    // create a filter for a movie to update
    const filter = { "name": {"firstName": firstName, "lastName": lastName }};

    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: false };

    // create a document that sets the plot of the movie
    const updateDoc = {
      $set:{
        "name": {
            "firstName": newFirstName,
            "lastName": newLastName
          }
      }
    };

    const result = await col.updateOne(filter, updateDoc, options);

    console.log(result);

  } catch(err){
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}


module.exports = updateUser;