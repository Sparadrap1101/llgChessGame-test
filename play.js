const express = require('express');
const cors = require('cors');
const interact = require('./interact.js');

const app = express();
app.use(cors());

app.listen(8080, () => console.log('Server started. Listening on port 8080!'));

app.post("/interact", async (req, res) => {
    let result;

    try {
        result = await interact(req.query.balance, req.query.amount);
    } catch (error) {
        console.error(error);
    }

    res.status(200).send(result);
});
