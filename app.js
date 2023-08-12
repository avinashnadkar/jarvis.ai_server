const express = require("express");
const app = express ();
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get('/status', (request, response) => {

    const status = {
       'Status': 'Running on port no. ' + PORT
    };

    response.send(status);
    
 });

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});


