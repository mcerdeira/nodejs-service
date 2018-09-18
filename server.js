const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

var response = {
    "CrmGuid": "12B97852-AA6D-E811-80C7-005056B26F0C",
    "PromeNbr": "",
    "Code": "00",
    "Message": "",
    "CreatedOn": "2018-09-17T16:33:04.8722127"
};

app.get('/*', (req, res) => {
    res.send(response);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});