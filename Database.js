const { MongoClient } = require("mongodb");
const url = "mongodb+srv://ankit6686510:uefNGVFROzJaslue@nodecluster.napoi.mongodb.net";

const client = new MongoClient(url);
const dbName = "heloworld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    Name: "Ankit",
    city: "newdelhi",
    phonenumber: "1234567890",
  };

  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



  //note-->just go to mongodb node github for the code