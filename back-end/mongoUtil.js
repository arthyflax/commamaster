import { MongoClient } from "mongodb";
import vars from "./vars.json" assert { type: "json" };

export let dbInstance;

export const connectToServer = function (callback) {
    MongoClient.connect(vars.uri, { useNewUrlParser: true }, (err, client) => {
        dbInstance = client.db("Kommafy");
        return callback(err);
    });
};
