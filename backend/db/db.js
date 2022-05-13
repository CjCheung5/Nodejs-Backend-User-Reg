import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://admin:14055041@main.ey8s8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export default client;