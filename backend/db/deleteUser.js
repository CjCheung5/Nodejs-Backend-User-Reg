const client = require('./db');

async function deleteUser(firstName, lastName) {
  try {
    await client.connect();

    const db = client.db("main");
    const col = db.collection("user");

    // Query for a movie that has title "Annie Hall"
    let query = {"name": {"firstName": firstName, "lastName": lastName}};

    const result = await col.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  }catch(err){
    console.log(err.stack)
  }
  finally {
    await client.close();
  }
}

module.exports = deleteUser;