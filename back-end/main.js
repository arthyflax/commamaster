import express from "express";
import {connectToServer,dbInstance} from "./mongoUtil.js";
import path from "path";;
import insertFormatedSentence from "./insert.js";

connectToServer((err)=>{if(err)console.error(err)})

const app = express();
const port = 3000;

const __dirname = path.resolve();

app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

app.get("/sentence", async (req, res) => {
    let result;
    try {
        let cdb = dbInstance;
        result = cdb.collection("texts").aggregate([{ $sample: { size: 1 } }]);
        res.send(await result.next());
    } catch (e) {
        console.error(e);
    }
});

app.post("/addSentence", (req, res) => {
    insertFormatedSentence(req.body.sentence);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
