const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const tesseract = require('tesseract.js');
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const router = express.Router();
app.use(express.urlencoded())
app.use("/", router);
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/', function (req, res) {
    res.sendfile("index.html");
});

router.post('/show', (req, res) => {

    let url = req.body.url;
    console.log(url);

    tesseract.recognize(
        url,
        'eng',
        { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        res.send(`<center>${text}<center>`);

    })


})












app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})