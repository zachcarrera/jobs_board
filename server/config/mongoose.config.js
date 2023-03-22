const mongoose = require("mongoose");

const dbName = process.env.DB;
const username = process.env.USERNAME;
const pw = process.env.PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.7fscy2n.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log(`Established a connection to the database ${dbName}`)
    )
    .catch((error) =>
        console.log(
            "Something went wrong when connection to the database",
            error
        )
    );
